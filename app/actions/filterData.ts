export function filterData(data: any) {
  const filteredData = data.map((item: any, index: number) => {
    if (item.jbd.install_date === "2023-06-26") {
      let jobSkus;
      if (item.jbd.additional_job_information?.skus) {
        jobSkus = item.jbd.additional_job_information.skus;
        // Run some specific logic for defined 'jobSkus'
      } else {
        jobSkus = item.jbd.skus;
        // Run some other logic for undefined 'jobSkus'
      }

      const newData = {
        name: item.jbd.cust_l_name,
        phoneNumber:
          item.jbd.home_area_code +
          "-" +
          item.jbd.home_value1 +
          "-" +
          item.jbd.home_value2,
        address: item.jbd.city + ", " + item.jbd.state + " " + item.jbd.zip,
        date: item.jbd.install_date,
        job: jobSkus,
      };

      // console.log(index, item.jbd.additional_job_information.skus);
      return newData;
    }
    return null; // Return null for items that do not meet the condition
  });

  const filteredResult = filteredData.filter((item: any) => item !== null); // Filter out null items

  return filteredResult; // Return the filtered data
}
