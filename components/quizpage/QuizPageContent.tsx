"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import NavigationCard from "./NavigationCard";
import PageHeader from "./PageHeader";
import QnaCard from "./QnaCard";
import SubmissionAlert from "./SubmissionAlert";
import { useStore } from "@/store/useStore";

const QuizPageContent = () => {
  const active = useStore((store) => store.active);
  const setActive = useStore((store) => store.setActive);
  const submitted = useStore((store) => store.submitted);

  return (
    <section className="container py-6">
      <PageHeader />

      <div className="flex md:gap-16 gap-10 md:flex-row flex-col-reverse">
        <div className="flex flex-col gap-5 flex-1">
          <QnaCard />
          <div className="flex items-center justify-between">
            {active !== 0 && (
              <Button
                onClick={() => {
                  setActive(active - 1);
                }}
              >
                <ArrowLeftIcon className="mr-2" />
                Prev
              </Button>
            )}

            {active !== 14 && (
              <Button
                className="ml-auto"
                onClick={() => {
                  setActive(active + 1);
                }}
              >
                Next
                <ArrowRightIcon className="ml-2" />
              </Button>
            )}
          </div>
        </div>
        <div className="md:w-1/5 md:ml-auto gap-y-5 flex flex-col">
          <NavigationCard />
          {!submitted && <SubmissionAlert />}
        </div>
      </div>
    </section>
  );
};

export default QuizPageContent;
