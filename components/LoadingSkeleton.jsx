import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <main>
      <section className="flex flex-col md:flex-row" style={{ minHeight: "70vh" }}>
        <div className=" px-6 flex-1 flex flex-col items-center justify-end md:justify-center">
          <div className="flex items-center flex-col md:block">
            <Skeleton className="w-32 h-2 mb-4" />
            <Skeleton className="w-80 h-4 mb-4" />
            <Skeleton className="w-24 h-2" />
          </div>
        </div>
        <div className="flex-1 flex md:items-center justify-center">
          <div className="max-w-xs md:max-w-sm lg:max-w-2xl">
            <Skeleton className="h-80 w-80 mt-8" />
          </div>
        </div>
      </section>
    </main>
  );
}
