import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface QuizAnswer {
  questionId: string;
  value: string;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
}

export type Role = 'Innovator' | 'Coach' | 'Leader';

interface QuizState {
  answers: QuizAnswer[];
  currentQuestion: number;
  role: Role | null;
  userInfo: UserInfo | null;
  
  // Actions
  setAnswer: (questionId: string, value: string) => void;
  setCurrentQuestion: (question: number) => void;
  setRole: (role: Role) => void;
  setUserInfo: (userInfo: UserInfo) => void;
  resetQuiz: () => void;
  calculateRole: () => Role;
}

export const useQuizStore = create<QuizState>()(  persist(
    (set, get) => ({
      answers: [],
      currentQuestion: 1,
      role: null,
      userInfo: null,
      
      setAnswer: (questionId: string, value: string) => {
        set((state) => {
          const existingIndex = state.answers.findIndex(a => a.questionId === questionId);
          const newAnswers = [...state.answers];
          
          if (existingIndex >= 0) {
            newAnswers[existingIndex] = { questionId, value };
          } else {
            newAnswers.push({ questionId, value });
          }
          
          return { answers: newAnswers };
        });
      },
      
      setCurrentQuestion: (question: number) => {
        set({ currentQuestion: question });
      },
      
      setRole: (role: Role) => {
        set({ role });
      },
      
      setUserInfo: (userInfo: UserInfo) => {
        set({ userInfo });
      },
      
      resetQuiz: () => {
        set({
          answers: [],
          currentQuestion: 1,
          role: null,
          userInfo: null
        });
      },
      
      calculateRole: (): Role => {
        const answers = get().answers;
        
        // Logic based on Question 2 (working style preference)
        const workingStyleAnswer = answers.find(a => a.questionId === 'q2');
        
        if (workingStyleAnswer) {
          switch (workingStyleAnswer.value) {
            case 'independent':
              return 'Innovator';
            case 'small-team':
              return 'Coach';
            case 'ecosystem':
              return 'Leader';
            default:
              return 'Innovator';
          }
        }
        
        return 'Innovator'; // Default fallback
      }
    }),
    {
      name: 'quiz-storage', // unique name
      // Optional: only persist certain parts
      partialize: (state) => ({ 
        answers: state.answers, 
        role: state.role, 
        userInfo: state.userInfo 
      }),
    }
  )
);