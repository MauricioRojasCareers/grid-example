import { filterData } from "./filterData";

interface FormatDataProps {
  filteredData: object;
}

export function formatData(filteredData: any) {
  //   console.log("from filtered:", filteredData[0]);

  const formattedDataArray = filteredData.map((item: any) => {
    const formattedData = {
      name: item.name.replace(/"/g, "").replace(/\[|\]/g, ""),
      phoneNumber: item.phoneNumber.replace(/\[|\]/g, ""),
      address: item.address.replace(/\[|\]/g, ""),
      date: item.date.replace(/\[|\]/g, ""),
      job: Array.isArray(item.job)
        ? item.job.join(", ").replace(/"/g, "")
        : item.job,
    };
    // console.log(formattedData);
    return formattedData;
  });

  return formattedDataArray;
}
