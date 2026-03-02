import ImageSlider from "./ImageSlider";
import { appreData, birthdayData, cardData, celebData, employeeData, mrbeastData, springData, thankyouData } from "../Data/GiftCardData";

const carddata = cardData
const mrbeastdata = mrbeastData
const employeedata = employeeData
const thankyoudata = thankyouData
const birthdaydata = birthdayData
const celebdata = celebData
const springdata = springData
const appredata = appreData

export function GiftCard() {
  return (
    <>
        <div className="container-fluid mt-5">
            <div className="row">
                <h1 className="text-black fw-bold image-slider-padding text-break" style={{padding : '0px 99px'}}>Gift Cards</h1>
                <div className="col">
                    <ImageSlider images={carddata} title={'Featured'}/>
                </div>
                <div className="col py-4">
                    <ImageSlider images={mrbeastdata} title={'Mrbeast | Beast Games'}/>
                </div>
                <div className="col py-4">
                    <ImageSlider images={employeedata} title={'Employee appreciation'}/>
                </div>
                <div className="col py-4">
                    <ImageSlider images={birthdaydata} title={'birthday'}/>
                </div>
                <div className="col py-4">
                    <ImageSlider images={thankyoudata} title={'thank you'}/>
                </div>
                <div className="col py-4">
                    <ImageSlider images={celebdata} title={'celebration'}/>
                </div>
                <div className="col py-4">
                    <ImageSlider images={springdata} title={'spring'}/>
                </div>
                <div className="col py-4">
                    <ImageSlider images={appredata} title={'Appreciation'}/>
                </div>
            </div>
        </div>
    </>
  );
}