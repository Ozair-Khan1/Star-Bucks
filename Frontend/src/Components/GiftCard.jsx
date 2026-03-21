import ImageSlider from "./ImageSlider";
import { appreData, birthdayData, cardData, celebData, employeeData, mrbeastData, springData, thankyouData } from "../Data/GiftCardData";
import { motion } from "framer-motion";

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
                <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col">
                    <ImageSlider images={carddata} title={'Featured'}/>
                </motion.div>
                <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col py-4">
                    <ImageSlider images={mrbeastdata} title={'Mrbeast | Beast Games'}/>
                </motion.div>
                <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col py-4">
                    <ImageSlider images={employeedata} title={'Employee appreciation'}/>
                </motion.div>
                <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col py-4">
                    <ImageSlider images={birthdaydata} title={'birthday'}/>
                </motion.div>
                <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col py-4">
                    <ImageSlider images={thankyoudata} title={'thank you'}/>
                </motion.div>
                <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col py-4">
                    <ImageSlider images={celebdata} title={'celebration'}/>
                </motion.div>
                <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col py-4">
                    <ImageSlider images={springdata} title={'spring'}/>
                </motion.div>
                <motion.div whileInView={{opacity : [0, 1]}} transition={{duration : 0.8}} className="col py-4">
                    <ImageSlider images={appredata} title={'Appreciation'}/>
                </motion.div>
            </div>
        </div>
    </>
  );
}