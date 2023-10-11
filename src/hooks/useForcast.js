import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useForcast(city){
    const apiKey = "4ec2778984b743a084762305231110"
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=8`;
    const { data, error, isLoading } = useSWR(url, fetcher)
    return {
      data,
      isLoading,
       error
    }
}