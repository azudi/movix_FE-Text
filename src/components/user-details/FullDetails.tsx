import React, { useEffect } from 'react'
import { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface Props {
    userInfo: any
}

function FullDetails(props: Props) {
    const { userInfo } = props
    const [personalInfo, setPersonalInfo] = useState([])
    const [educationInfo, setEducationInfo] = useState([])
    const [guarantorInfo, setGuarantorInfo] = useState([])
    const [socialInfo, setSocialInfo] = useState([])


    useEffect(()=>{
        let extractInto : any = [
            {title: 'full Name', data: userInfo?.profile?.firstName + " " + userInfo?.profile?.lastName},
            {title: 'Phone Number', data: userInfo?.profile?.phoneNumber},
            {title: 'Email Address', data: userInfo?.email},
            {title: 'Bvn', data: userInfo?.profile?.bvn},
            {title: 'Gender', data: userInfo?.profile?.gender},
            {title: 'Marital status', data: 'single'},
            {title: 'Children', data: "none"},
            {title: 'Type of residence', data: "Parent’s Apartment"}, 
        ]
        setPersonalInfo(extractInto)

        let educationInfo : any = [
            {title: 'level of education', data: userInfo?.education?.level},
            {title: 'employment status', data: userInfo?.education?.employmentStatus},
            {title: 'sector of employment', data: userInfo?.education?.sector},
            {title: 'Duration of employment', data: userInfo?.education?.duration},
            {title: 'office email', data: userInfo?.education?.officeEmail},
            {title: 'Monthly income', data: `#${userInfo?.education?.monthlyIncome[0]} - #${userInfo?.education?.monthlyIncome[1]}`},
            {title: 'loan repayment', data: "40,000"}, 
        ]
        setEducationInfo(educationInfo)

        let socialInfo : any = [
            {title: 'Twitter', data: userInfo?.socials?.facebook},
            {title: 'Facebook', data: userInfo?.socials?.twitter},
            {title: 'Instagram', data: userInfo?.socials?.instagram},
        ]
        setSocialInfo(socialInfo)

        let guarantorInfo : any = [
            {title: 'full Name', data: userInfo?.guarantor?.firstName + " " + userInfo?.guarantor?.lastName},
            {title: 'Phone Number', data: userInfo?.guarantor?.phoneNumber},
            {title: 'Email Address', data: "debby@gmail.com"},
            {title: 'Relationship', data: "Sister"},
        ]
        setGuarantorInfo(guarantorInfo)
    },[])    
 
    useEffect(()=>{
          let pallet = document.querySelectorAll(".user-info-pallet");
          let start = 0
         let childTranslate =  setInterval(()=>{
             (pallet[start] as any).style.cssText = 'opacity:1;transform:scale(1);left:0'
             start++
             if(start >= pallet.length) clearInterval(childTranslate)
          },300)

          if(start >= pallet.length) clearInterval(childTranslate)
    },[userInfo])

    return (
        <div className='bg-white p-3 py-4 shadow-md rounded-md'>
            <div>
                <h3 className='w-full text-[14px] font-bold mb-3 pl-3'>Personal Information</h3>
                <div className='flex flex-wrap border-b-[2px] border-b-gray/50 pb-4 mb-4'>
                    {
                        personalInfo.map((info : any, index)=>{
                            return (
                                <div className='user-info-pallet'>
                                    <b>{info.title}</b>
                                    <span className='w-full truncate inline-block capitalize'>{info.data}</span>
                                </div>
                            )
                        })
                    }
                </div>
             
                <h3 className='w-full text-[14px] font-bold mb-3 pl-3'>Education and Employment</h3>
                
                <div className='flex flex-wrap border-b-[2px] border-b-gray/50 pb-4 mb-4'>
                    {
                       educationInfo.map((info : any, index)=>{
                            return (
                                <div className='user-info-pallet'>
                                     <b>{info.title}</b>
                                    <span className='w-full truncate inline-block capitalize'>{info.data}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <h3 className='w-full text-[14px] font-bold mb-3 pl-3'>Socials</h3>
                <div className='flex flex-wrap border-b-[2px] border-b-gray/50 pb-4 mb-4'>
                    {
                        socialInfo.map((info : any, index)=>{
                            return (
                                <div className='user-info-pallet'>
                                     <b>{info.title}</b>
                                    <span className='w-full truncate inline-block capitalize'>{info.data}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <h3 className='w-full text-[14px] font-bold mb-3 pl-3'>Guarantor</h3>
                <div className='flex flex-wrap border-b-[2px] border-b-gray/50 pb-4'>
                    {
                        guarantorInfo.map((info: any, index)=>{
                            return (
                                <div className='user-info-pallet'>
                                    <b>{info.title}</b>
                                    <span className='w-full truncate inline-block capitalize'>{info.data}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex flex-wrap pb-2 pt-12'>
                    {
                        guarantorInfo.map((info: any, index)=>{
                            return (
                                <div className='user-info-pallet'>
                                    <b>{info.title}</b>
                                    <span className='w-full truncate inline-block capitalize'>{info.data}</span>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default FullDetails
