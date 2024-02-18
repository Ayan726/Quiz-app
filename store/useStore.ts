import { create } from "zustand";

const arr = new Array(15);

interface State {
  answers: string[];
  active: number;
  loading: boolean;
  timeLeft: number;
  submitted: boolean;
  score: number;
  setScore: (val: number) => void;
  setSubmitted: (val: boolean) => void;
  reduceTime: () => void;
  setLoading: (val: boolean) => void;
  setAnswers: (ind: number, content: string) => void;
  setActive: (val: number) => void;
}

export const useStore = create<State>()((set) => ({
  answers: arr,
  active: 0,
  loading: true,
  timeLeft: 1800,
  submitted: false,
  score: 0,
  setScore: (val) => {
    set({ score: val });
  },
  setSubmitted: (val) => {
    set({ submitted: val });
  },
  setAnswers: (ind, content) =>
    set((state) => {
      const newAnswers = state.answers;
      newAnswers[ind] = content;
      return { answers: newAnswers };
    }),
  setActive: (val) => {
    set({ active: val });
  },
  setLoading: (val) => {
    set({ loading: val });
  },
  reduceTime: () => {
    set((state) => ({ timeLeft: state.timeLeft - 1 }));
  },
}));
