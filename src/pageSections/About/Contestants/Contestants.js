import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Contestants.css"
import Team from '../../../components/Team/Team';
import { contestant1, contestant2, contestant3, contestant4, contestant5, coach1, coach2, coach3 } from '../../../StaticFilePath';


const Teams = () => {
    const teamInfo = [
        {
            teamName: "St Andrews",
            data: [
                {
                    name: "Dylan Dejahang",
                    img:  contestant1 ,
                    info: "Dylan is a 1st year student at St Andrews studying geography. He is a multi-national athlete at both open water swimming and rowing; he swam the channel at 16 for Young Minds after his best friend committed suicide. Although his experience is limited compared to the other athletes, he’s a founder of University Ultra Run, so his heart has been in this since the inception of the idea… Will heart beat experience? "
                },
                {
                    name: "Molly Pace",
                    img: contestant2 ,
                    info: "Molly is a recent graduate from the University of St Andrews and now an employee of Scott Logic; a fantastic technology consultancy company that has supported Molly from day 1 with her training! She was both president and captain of the St Andrews Cross Country Club and has a wealth of running experience, recently coming in the top 30 women for the Great North Run, a race with 60,000 participants!"

                },
                {
                    name: "Nick Butter",
                    img: coach1 ,
                    info: "Nick Butter is the first human being to run a marathon in every country in the world. He will be an invaluable source of experience for St Andrews in facing extreme adversity and the most intense racing conditions"
                }
            ]
        },
        {
            teamName: "Cambridge",
            data: [
                {
                    name: "Edward Cator",
                    img: contestant3,
                    info: "Edward is a final year undergraduate law student at Cambridge. He has completed many extreme races and expeditions across sports from a solo charity bike ride covering 1000 miles in 10 days across France to successfully attempting the Frog Graham Round, a 42 mile self-navigated run-swim challenge including 16,000 ft ascent and 3 miles of swimming."
                },
                {
                    name: "Sarah Pemberton",
                    img: contestant4,
                    info: "Sarah is a Cambridge PHD student at Cambridge; she was born in Hong Kong and is half English. She is one of our most experienced female ultra runners. She’s completed self supported races in Namibian and Gobi deserts; she’s also competed in races that stretch to a 100 miles throughout the world! She became the first female to complete the Hong Kong Four in Four challenge in 2019 and the youngest person in 2020 to complete Hong Kong Four Trails Ultra Challenge; she is an inspiration for up and coming women in the ultra-marathon world!"
                }, 
                {
                    name: "Ian Sharman",
                    img: coach2,
                    info: "Ian is a British ultramarathon runner, who currently holds the record for the Grand Slam of Ultra running. As well as breaking records, Sharman is an ultra marathon coach; and, as a Cambridge alumni himself, the Cambridge team  couldn’t be in better hands!"
                }
            ]
        },
        {
            teamName: "Oxford",
            data: [
                {
                    name: "Lachlan Arthur",
                    img: contestant5,
                    info: "Lachlan was born and raised in South Australia and is a Phil (PHD) student in Orthopedic Surgery. He's completed Inward Bound, the \"world's most unique\" adventure race, 5 times, so is well equipped to face surprises and new challenges along his journey to John O Groats. Lachlan has a wealth of experience competing in marathons, having raced a total of 18 marathons from Canberra Bush Capital Marathon to Lakes Marathon in Uppsala (both of which he placed 2nd)."
                },
                {
                    name: "Carla Molinaro",
                    img: coach3,
                    info: "Carla Molinaro is a record breaking ultra marathon runner, adventurer and running coach who is training the Oxford team She currently holds the ladies world record for the run from Land's End to John O'Groats"
                }
            ]
        }
    ]
    return (
        <section id="contestants">
            <h3 id='contestants_heading'>Contestants</h3>
            <h1>To be confirmed</h1>
            {/* <Swiper className='swiper_container'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >

                {teamInfo.map((info, key) => (
                    <SwiperSlide className='swiper_slide'><Team  teamInfo={info} key={key}/></SwiperSlide>
                ))}
            
            </Swiper> */}
        </section>
    )
}

export default Teams