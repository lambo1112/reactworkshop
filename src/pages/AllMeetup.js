import { useEffect } from "react";
import { useState } from "react";
import MeetupList from "../components/Router/meetups/MeetupList";

function AllMeetup(){
  const [isLoading,setIsLoading] = useState(true);
  const [loadedMeetups,setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setIsLoading(true)
    fetch("https://publicweb-71907-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json").then((res)=> {
      return res.json();
    }).then((data)=>{
      const meetups =[]

      for(const key in data){
        const meetup ={
          id:key,
          ...data[key]
        };

        meetups.push(meetup)
      }

      setIsLoading(false);
      setLoadedMeetups(meetups)
    })
  }
  ,[])

    if(isLoading){
      return(
        <section>
          <p>Loading...</p>
        </section>
      )
    }

    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}
export default AllMeetup;