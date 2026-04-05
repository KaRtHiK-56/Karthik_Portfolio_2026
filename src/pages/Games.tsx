import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { 
  collection, 
  query, 
  orderBy, 
  limit, 
  onSnapshot, 
  addDoc, 
  serverTimestamp,
  doc,
  setDoc,
  getDoc,
  where
} from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Terminal, Trophy, User as UserIcon, LogOut, Zap, Brain, AlertTriangle, RefreshCw } from 'lucide-react';

// --- Types ---
interface ScoreEntry {
  id: string;
  username: string;
  score: number;
  uid: string;
}

interface GameNode {
  id: number;
  isGlitching: boolean;
  isError: boolean;
}

// --- Components ---

export default function GamesPage() {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string>('');
  const [isGuest, setIsGuest] = useState(false);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'auth' | 'game'>('auth');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setIsGuest(false);
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
          setView('game');
        } else {
          setView('auth');
        }
      } else if (!isGuest) {
        setView('auth');
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [isGuest]);

  const handleGuestStart = () => {
    setIsGuest(true);
    setUsername('GUEST_UNIT');
    setView('game');
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="font-mono text-primary animate-pulse tracking-[0.5em]">INITIALIZING_SYSTEM...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <header className="mb-12 space-y-4 relative">
        <div className="inline-block px-4 py-1 bg-surface-container border-2 border-primary text-[10px] font-mono text-primary tracking-[0.3em] uppercase font-black">
          // NEURAL_TEST_CHAMBER_V4
        </div>
        <h1 className="font-brutal text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-on-surface leading-[0.8] uppercase">
          Neural<br/>
          <span className="text-primary bg-surface-container-highest px-4 -ml-4 inline-block transform -skew-x-12 ai-glow-primary">OVERLOAD</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          {view === 'auth' && !user && !isGuest ? (
            <AuthComponent 
              onComplete={(name) => { setUsername(name); setView('game'); }} 
              onGuest={handleGuestStart}
            />
          ) : (
            <GameComponent 
              user={user} 
              username={username} 
              isGuest={isGuest} 
              onExit={() => { setIsGuest(false); setView('auth'); }} 
            />
          )}
        </div>

        {/* Sidebar: Leaderboard */}
        <div className="lg:col-span-4">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}

function AuthComponent({ onComplete, onGuest }: { onComplete: (username: string) => void, onGuest: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        // Username will be fetched in the main useEffect
      } else {
        if (!usernameInput || usernameInput.length < 3) {
          throw new Error('Username must be at least 3 characters');
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Save username to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          username: usernameInput,
          createdAt: serverTimestamp()
        });
        onComplete(usernameInput);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface-container p-8 border-2 border-primary relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Terminal className="w-24 h-24 text-primary" />
      </div>
      
      <h2 className="font-brutal text-2xl sm:text-3xl font-black uppercase mb-8 flex items-center gap-3 break-words">
        <UserIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
        <span className="truncate">{isLogin ? 'ACCESS_GRANTED' : 'REGISTER_UNIT'}</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        {!isLogin && (
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-primary font-black">USERNAME</label>
            <input 
              type="text" 
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              className="w-full bg-background border-2 border-primary/20 p-4 font-mono text-on-surface focus:border-primary outline-none transition-all"
              placeholder="NEURAL_ID_01"
              required
            />
          </div>
        )}
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-primary font-black">EMAIL_ADDRESS</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-background border-2 border-primary/20 p-4 font-mono text-on-surface focus:border-primary outline-none transition-all"
            placeholder="USER@SYSTEM.AI"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-primary font-black">ACCESS_KEY (PASSWORD)</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-background border-2 border-primary/20 p-4 font-mono text-on-surface focus:border-primary outline-none transition-all"
            placeholder="********"
            required
          />
        </div>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 font-mono text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            type="submit"
            disabled={loading}
            className="bg-primary text-on-primary p-4 font-brutal text-xl font-black uppercase hover:bg-primary/90 transition-all ai-glow-primary disabled:opacity-50"
          >
            {loading ? '...' : (isLogin ? 'LOGIN' : 'CREATE')}
          </button>
          <button 
            type="button"
            onClick={onGuest}
            className="bg-surface-container-high text-primary border-2 border-primary p-4 font-brutal text-xl font-black uppercase hover:bg-primary/10 transition-all"
          >
            GUEST_MODE
          </button>
        </div>

        <button 
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="w-full text-primary font-mono text-[10px] uppercase tracking-widest hover:underline"
        >
          {isLogin ? 'NEED_NEW_ID? REGISTER_HERE' : 'ALREADY_REGISTERED? LOGIN_HERE'}
        </button>
      </form>
    </motion.div>
  );
}

function GameComponent({ user, username, isGuest, onExit }: { user: User | null, username: string, isGuest: boolean, onExit: () => void }) {
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'ended'>('idle');
  const [timeLeft, setTimeLeft] = useState(30);
  const [nodes, setNodes] = useState<GameNode[]>([]);
  const [personalBest, setPersonalBest] = useState<number>(0);
  const scoreRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const glitchIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const GRID_SIZE = 12;

  const initNodes = useCallback(() => {
    const newNodes: GameNode[] = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      newNodes.push({ id: i, isGlitching: false, isError: false });
    }
    setNodes(newNodes);
  }, []);

  useEffect(() => {
    initNodes();
  }, [initNodes]);

  useEffect(() => {
    if (user && !isGuest) {
      const q = query(
        collection(db, 'scores'),
        where('uid', '==', user.uid),
        orderBy('score', 'desc'),
        limit(1)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          setPersonalBest(snapshot.docs[0].data().score);
        }
      }, (err) => {
        console.error('Personal best error:', err);
      });
      return unsubscribe;
    }
  }, [user, isGuest]);

  const startGame = () => {
    setScore(0);
    scoreRef.current = 0;
    setMultiplier(1);
    setTimeLeft(30);
    setGameState('playing');
    initNodes();
    
    if (timerRef.current) clearInterval(timerRef.current);
    if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    glitchIntervalRef.current = setInterval(() => {
      setNodes((prev) => {
        const next = [...prev];
        // Reset all
        next.forEach(n => { n.isGlitching = false; n.isError = false; });
        
        const usedIndices = new Set<number>();
        
        // Randomly glitch 2-3 nodes (Normal nodes)
        const glitchCount = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < glitchCount; i++) {
          let idx;
          do {
            idx = Math.floor(Math.random() * GRID_SIZE);
          } while (usedIndices.has(idx));
          usedIndices.add(idx);
          next[idx] = { ...next[idx], isGlitching: true, isError: false };
        }

        // Add exactly 2 danger nodes (Error nodes)
        for (let i = 0; i < 2; i++) {
          let idx;
          let attempts = 0;
          do {
            idx = Math.floor(Math.random() * GRID_SIZE);
            attempts++;
          } while (usedIndices.has(idx) && attempts < 20);
          
          if (!usedIndices.has(idx)) {
            usedIndices.add(idx);
            next[idx] = { ...next[idx], isGlitching: false, isError: true };
          }
        }
        
        return next;
      });
    }, 800);
  };

  const [isSaving, setIsSaving] = useState(false);

  const endGame = async () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current);
    setGameState('ended');

    const finalScore = scoreRef.current;
    if (user && !isGuest && finalScore > 0) {
      setIsSaving(true);
      try {
        // 1. Save to history
        await addDoc(collection(db, 'scores'), {
          uid: user.uid,
          username: username,
          score: finalScore,
          timestamp: serverTimestamp()
        });

        // 2. Update personal best in 'leaderboard' if higher
        const leaderboardRef = doc(db, 'leaderboard', user.uid);
        const currentBestDoc = await getDoc(leaderboardRef);
        
        if (!currentBestDoc.exists() || finalScore > currentBestDoc.data().score) {
          await setDoc(leaderboardRef, {
            uid: user.uid,
            username: username,
            score: finalScore,
            timestamp: serverTimestamp()
          });
        }
      } catch (err) {
        console.error('Failed to save score:', err);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handleNodeClick = (node: GameNode) => {
    if (gameState !== 'playing') return;

    if (node.isGlitching) {
      const points = 10 * multiplier;
      setScore(prev => {
        const newScore = prev + points;
        scoreRef.current = newScore;
        return newScore;
      });
      setMultiplier(prev => Math.min(prev + 0.1, 5));
      // Clear this node
      setNodes(prev => prev.map(n => n.id === node.id ? { ...n, isGlitching: false } : n));
    } else if (node.isError) {
      setMultiplier(1);
      setScore(prev => {
        const newScore = Math.max(0, prev - 50);
        scoreRef.current = newScore;
        return newScore;
      });
      setNodes(prev => prev.map(n => n.id === node.id ? { ...n, isError: false } : n));
    } else {
      // Miss
      setMultiplier(1);
    }
  };

  const handleAction = () => {
    if (isGuest) {
      onExit();
    } else {
      signOut(auth);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-surface-container p-6 border-2 border-primary/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary flex items-center justify-center transform -skew-x-12">
            <UserIcon className="w-6 h-6 text-on-primary" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-primary uppercase tracking-widest font-black">
              {isGuest ? 'GUEST_UNIT' : 'OPERATOR'}
            </div>
            <div className="font-brutal text-xl font-black uppercase">{username}</div>
          </div>
        </div>
        <button 
          onClick={handleAction}
          className="p-3 bg-surface-container-high border-2 border-primary/20 hover:border-primary transition-all text-primary"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-surface-container p-8 border-2 border-primary relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
        <div className="absolute inset-0 ai-data-stream opacity-5 pointer-events-none"></div>
        
        {gameState === 'idle' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 relative z-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full">
              <div className="text-center p-2 bg-surface-container-low border border-primary/10">
                <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">MISSION</div>
                <div className="font-brutal text-base sm:text-lg font-black uppercase tracking-tighter leading-none truncate">STABILIZE_NODES</div>
              </div>
              <div className="text-center p-2 bg-surface-container-low border border-primary/10">
                <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">DURATION</div>
                <div className="font-brutal text-base sm:text-lg font-black uppercase tracking-tighter leading-none truncate">30_SECONDS</div>
              </div>
              {!isGuest && (
                <div className="text-center p-2 bg-surface-container-low border border-primary/10">
                  <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">PERSONAL_BEST</div>
                  <div className="font-brutal text-base sm:text-lg font-black uppercase tracking-tighter leading-none truncate">{personalBest}</div>
                </div>
              )}
            </div>

            <div className="max-w-md mx-auto p-6 bg-surface-container-high border-2 border-primary/20 space-y-4 text-left">
              <div className="flex items-center gap-2 border-b border-primary/20 pb-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-mono text-[10px] text-primary font-black uppercase tracking-widest">OPERATIONAL_MANUAL</span>
              </div>
              <ul className="space-y-2 font-mono text-[10px] text-on-surface-variant uppercase tracking-tight">
                <li className="flex gap-2">
                  <span className="text-primary font-black">[01]</span>
                  CLICK NEON NODES <Zap className="w-3 h-3 inline text-primary" /> TO STABILIZE SYSTEM AND GAIN POINTS.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-black">[02]</span>
                  CONSECUTIVE HITS INCREASE YOUR NEURAL MULTIPLIER (MAX 5.0X).
                </li>
                <li className="flex gap-2 text-red-500">
                  <span className="font-black">[03]</span>
                  AVOID ERROR NODES <AlertTriangle className="w-3 h-3 inline" />. THEY DRAIN SCORE AND RESET MULTIPLIER.
                </li>
              </ul>
            </div>

            {isGuest && (
              <div className="p-4 bg-primary/10 border border-primary/20 font-mono text-[10px] text-primary uppercase tracking-widest">
                NOTICE: GUEST_SCORES_NOT_SAVED_TO_LEADERBOARD
              </div>
            )}
            <button 
              onClick={startGame}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-primary text-on-primary font-brutal text-xl sm:text-2xl md:text-3xl font-black uppercase transform -skew-x-12 hover:scale-105 transition-all ai-glow-primary tracking-tighter"
            >
              START_SEQUENCE
            </button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <div className="w-full space-y-8 relative z-10">
            <div className="flex justify-between items-end">
              <div>
                <div className="font-mono text-[10px] text-primary uppercase tracking-widest">CURRENT_SCORE</div>
                <div className="font-brutal text-6xl font-black text-on-surface">{score}</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[10px] text-primary uppercase tracking-widest">TIME_REMAINING</div>
                <div className={`font-brutal text-4xl font-black ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-on-surface'}`}>
                  {timeLeft}s
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {nodes.map((node) => (
                <motion.button
                  key={node.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNodeClick(node)}
                  className={`aspect-square border-2 transition-all duration-200 relative overflow-hidden ${
                    node.isGlitching 
                      ? 'bg-primary border-primary ai-glow-primary' 
                      : node.isError 
                        ? 'bg-red-500 border-red-500 animate-pulse' 
                        : 'bg-surface-container-low border-primary/10 hover:border-primary/40'
                  }`}
                >
                  {node.isGlitching && <Zap className="w-8 h-8 text-on-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
                  {node.isError && <AlertTriangle className="w-8 h-8 text-on-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="font-mono text-[10px] text-primary uppercase tracking-widest">MULTIPLIER</div>
              <div className="h-2 flex-1 bg-primary/10 border border-primary/20 p-[2px]">
                <motion.div 
                  animate={{ width: `${(multiplier / 5) * 100}%` }}
                  className="h-full bg-primary"
                />
              </div>
              <div className="font-mono text-primary font-black">x{multiplier.toFixed(1)}</div>
            </div>
          </div>
        )}

        {gameState === 'ended' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 relative z-10 w-full px-4"
          >
            <h2 className="font-brutal text-3xl sm:text-5xl md:text-6xl font-black uppercase text-primary leading-none break-words tracking-tighter">
              SEQUENCE_<br className="sm:hidden" />COMPLETE
            </h2>
            <div className="bg-surface-container-high p-6 sm:p-8 border-2 border-primary/20">
              <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">FINAL_SCORE</div>
              <div className="font-brutal text-8xl font-black text-on-surface">{score}</div>
              {isSaving && (
                <div className="mt-4 font-mono text-[10px] text-primary animate-pulse uppercase tracking-widest font-black">
                  UPLOADING_TO_CENTRAL_DATABASE...
                </div>
              )}
              {!isSaving && !isGuest && score > 0 && (
                <div className="mt-4 font-mono text-[10px] text-green-500 uppercase tracking-widest font-black">
                  SCORE_SECURED_IN_LEADERBOARD
                </div>
              )}
            </div>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={startGame}
                disabled={isSaving}
                className="px-8 py-4 bg-primary text-on-primary font-brutal text-xl font-black uppercase transform -skew-x-12 hover:bg-primary/90 transition-all ai-glow-primary disabled:opacity-50"
              >
                RETRY_SYSTEM
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Leaderboard() {
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchScores = useCallback(() => {
    setLoading(true);
    // Reverting to 'scores' collection to show all game sessions as requested
    const q = query(
      collection(db, 'scores'),
      orderBy('score', 'desc'),
      limit(10)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newScores = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ScoreEntry[];
      
      // "allow duplicate but donot repeat the same entry"
      // We filter out entries that have the exact same UID and Score to prevent "repeating the same entry"
      // while still allowing different scores for the same user.
      const uniqueScores: ScoreEntry[] = [];
      const seen = new Set<string>();
      
      for (const s of newScores) {
        const key = `${s.uid}_${s.score}`;
        if (!seen.has(key)) {
          uniqueScores.push(s);
          seen.add(key);
        }
      }

      setScores(uniqueScores);
      setLoading(false);
      setIsRefreshing(false);
      setError(null);
    }, (err) => {
      console.error('Leaderboard error:', err);
      setError('FAILED_TO_SYNC_OPERATORS');
      setLoading(false);
      setIsRefreshing(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = fetchScores();
    return unsubscribe;
  }, [fetchScores]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchScores();
  };

  return (
    <div className="bg-surface-container border-2 border-primary/20 p-4 sm:p-6 md:p-8 h-full overflow-hidden flex flex-col max-w-full">
      <div className="flex items-center justify-between mb-8 gap-2 sm:gap-4 overflow-hidden">
        <h3 className="font-brutal text-base sm:text-lg md:text-xl font-black uppercase flex items-center gap-2 sm:gap-3 tracking-tighter text-on-surface min-w-0">
          <Trophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary shrink-0" />
          <span className="truncate">TOP_OPERATORS</span>
        </h3>
        <button 
          onClick={handleRefresh}
          disabled={loading || isRefreshing}
          className={`p-1.5 sm:p-2 bg-surface-container-high border-2 border-primary/20 hover:border-primary transition-all text-primary disabled:opacity-50 shrink-0 ${isRefreshing ? 'animate-spin' : ''}`}
          title="REFRESH_DATA"
        >
          <RefreshCw className="w-3 h-3 sm:w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4 flex-1 overflow-y-auto scrollbar-mobile pr-2">
        {loading ? (
          <div className="font-mono text-[10px] text-primary/40 animate-pulse uppercase tracking-widest">FETCHING_DATA...</div>
        ) : error ? (
          <div className="font-mono text-[10px] text-red-500 uppercase tracking-widest flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {error}
          </div>
        ) : scores.length === 0 ? (
          <div className="font-mono text-[10px] text-primary/40 uppercase tracking-widest">NO_RECORDS_FOUND</div>
        ) : (
          scores.map((entry, i) => (
            <motion.div 
              key={entry.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center justify-between p-3 sm:p-4 border-l-4 gap-2 ${i === 0 ? 'bg-primary/10 border-primary' : 'bg-surface-container-low border-primary/20'}`}
            >
              <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                <span className="font-mono text-primary font-black text-xs sm:text-base">#{i + 1}</span>
                <div className="min-w-0">
                  <div className="font-brutal text-sm sm:text-lg font-black uppercase text-on-surface truncate tracking-tighter">{entry.username}</div>
                  <div className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest truncate">UID_{entry.uid.slice(0, 8)}</div>
                </div>
              </div>
              <div className="font-brutal text-xl sm:text-2xl font-black text-primary shrink-0">{entry.score}</div>
            </motion.div>
          ))
        )}
      </div>

      <div className="mt-12 p-6 bg-primary/5 border border-primary/10">
        <div className="flex items-center gap-3 mb-2">
          <Brain className="w-4 h-4 text-primary" />
          <span className="font-mono text-[10px] text-primary font-black uppercase tracking-widest">SYSTEM_LOG</span>
        </div>
        <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed">
          Leaderboard updates in real-time. Only top 10 operators are displayed in the primary view.
        </p>
      </div>
    </div>
  );
}
