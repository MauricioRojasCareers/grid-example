import dummy from "@/data/dummy.json";
import { JobCard } from "@/components/Card/JobCard";
import { filterData } from "@/app/actions/filterData";
import { formatData } from "@/app/actions/formatData";

export default async function Home() {
  const filteredResult = await filterData(dummy);
  const formattedResult = await formatData(filteredResult);
  console.log("formatted:", formattedResult[0]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center gap-4 p-4 md:grid md:grid-cols-3">
          {formattedResult.map((item: any, index: any) => {
            return (
              <JobCard
                key={index}
                name={formattedResult[index].name}
                job={formattedResult[index].job}
                address={formattedResult[index].address}
                phoneNumber={formattedResult[index].phoneNumber}
                className="h-80 w-full"
              ></JobCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
