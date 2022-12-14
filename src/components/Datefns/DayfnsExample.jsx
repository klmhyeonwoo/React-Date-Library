import React, { useRef, useState } from 'react';
// import moment from 'moment';
// import moment from 'moment-timezone';
// 국제화시켜주는 번역
// import "moment/locale/ko";
// import dayjs from 'dayjs';
// import 'dayjs/locale/ko'
// import utc from 'dayjs/plugin/utc'
// import timezone from 'dayjs/plugin/timezone'
import { add, format, sub, differenceInHours } from 'date-fns';
import { format as timezoneFormat, toDate } from 'date-fns-tz';
import { ko } from 'date-fns/locale'
import addWeeks from 'date-fns/addWeeks';


export default function DayfnsExample() {

    const birthDayRef = useRef(null);
    const [day, setDay] = useState("");
    const handleBirthDayChange = (event) => {
        setDay(format(new Date(event.target.value), "EEEE", { locale: ko }));
    }

    // Day-fns는 OO(객체지향)이 아니다.

    const dateFnsDate = new Date();
    const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
    const NewDateFnsDate2 = addWeeks(newDateFnsDate, 1);
    return (
        <div>
            <h1>Dayfns</h1>
            <div>Immutable Check</div>
            <div>
                {format(dateFnsDate, "yyyy-MM-dd")} <br />
                {format(newDateFnsDate, "yyyy-MM-dd")} <br />
                {format(NewDateFnsDate2, "yyyy-MM-dd")} <br />
            </div>
            <br />
            <div>Summer Time (New-york)</div>
            <div>
                2018년 3월 10일 13시에 하루 더하기:
                {timezoneFormat(add(toDate("2018-03-10 13:00:00"), { days: 1 }), "yyyy-HH-dd HH:mm:ssXXX", {
                    timeZone: "America/New_York"
                })}
            </div>
            <div>
                2018년 3월 10일 13시에 24시간 더하기:
                {/* 뉴욕의 썸머타임으로 인해 시간차가 발생한다. */}
                {timezoneFormat(
                    add(toDate(new Date("2018-03-10 13:00:00"), { timeZone: "America/New_York" }),
                        { hours: 24 }), "yyyy-HH-dd HH:mm:ssXXX", {
                    timeZone: "America/New_York"
                })};
            </div>
            <br />
            <div>Leap year (korea)</div>
            <div>
                2017년 1월 1일에 1년 빼기:
                {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
            </div>
            <div>
                2017년 1월 1일에 365일 빼기:
                {/* 뉴욕의 썸머타임으로 인해 시간차가 발생한다. */}
                {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
            </div>
            <br />
            <div>한국어로 표기 07-21-2021을 2021년 7월 17일로 표기</div>
            {/* <div>{dayjs("07-17-2021").format("YYYY년 M월 D일")}</div> */}
            {format(new Date("07-17-2021"), "yyyy년 MM월 dd일")}
            <br />
            <div>자기 생일 요일 찾기</div>
            <div>
                <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
                <div>무슨 요일이었을까?</div>
                <div>{day}</div>
            </div>
            <br />
            <div>두 날짜 비교</div>
            <div>2021-07-17 03:00와 2021-07-18 02:00는 몇시간 차이인가?</div>
            <div>{`${differenceInHours(new Date("2021-07-17 03:00"), (new Date("2021-07-18 02:00")))}시간`}</div>
        </div>
    )
}
