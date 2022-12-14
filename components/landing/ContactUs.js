import React,  { useRef } from 'react'
import { useForm } from 'react-hook-form'
import Slider from 'react-slick'

function ContactUs() {
  const { register, handleSubmit, formState : {errors}, reset } = useForm()

  const sendMessage = async(values) => {
    let msg = await fetch('api/sendMessage', {
      body: JSON.stringify(values),
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
    })
    
    console.log(msg)
    try{
      if(msg.status == 200){
        window.alert('Thank you for contacting us.')
        reset()
      }
    }catch(error){
      window.alert('Something went wrong! ' + error)
    }
    
  }

  const slideRef = useRef()
    // let previous = document.getElementsById('previous')
    let settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    const next = () => {
        slideRef.current.slickNext()
    }

    const previous = () => {
        slideRef.current.slickPrev()
    }
  return (
   <section>
    <div>
      <div className='contact d-flex align-items-center justify-content-between row py-5 px-xxl-5 px-md-3 px-2'>
        <div className='contactUsdiv col-xl-12 col-xxl-7 row gx-3 text-xxl-start'>
          <div className='clientSlide pb-5 col-xxl-12 col-xl-6'>
              <div className=' clientReview d-flex justify-content-between align-items-center'>
                  <div className='ps-xxl-2'>
                      <span className='header'>what our clients say</span>
                  </div>
                  <div className='controls pe-xxl-5'>
                      <button className='previous border-0 bg-white' onClick={previous}><span className='fs-1'>&#8249;</span></button>
                      <button className='next border-0 bg-white' onClick={next}><span className='fs-1'>&#8250;</span></button>
                  </div>
              </div>
              <div className='my-slider '>
              {/* <div className='slide d-flex align-items-center justify-content-cetner'> */}
                  <Slider ref={slideRef} {...settings}>
                      <div className='slide-comment comment1'>
                        <p>
                          <span>
                          We appoint ARQON because of their aesthetic taste.
                          But we were surprised because they delivered more than what we expected.
                          It was such a smooth process that building our dream home was so chill.
                          I like the transparency and the commitment to the project.
                          They were easy to talk to and we had almost zero problems, making it such an easy ride for my growing family.
                          The best part about them is their commitment even after the turn-over of the house.
                          That???s what made us believe we made the right decision with ARQON.
                          </span>
                        </p>
                        <span className='clientName'>Pao and Kat Villar-Valdehueza</span><br/>
                        <span >Hueza and Valde The Good Froot</span>
                      </div>
                      <div className='slide-comment comment2'>
                        <p>
                          <span>
                          It was the best decision to hire Arqon to design and build our dream vacation home.
                          We met them in 2019 to kick off the project and amidst the Taal eruption and long pandemic, they managed to pull off a masterpiece that is beyond what we ever imagined!
                          They were always responsive to every single question and request we have and worked on the budget we set.
                          And even after one year of turnover, they still provide support whenever we need it!
                          My husband and I are very grateful to the entire team for making our dream come to life. 
                          </span>
                        </p>
                          <span className='clientName'>Mihir and Princess Vinekar</span><br/>
                          <span>Viram Villa Tagaytay</span>
                      </div>
                      <div className='slide-comment comment3'>
                        <p>
                          <span>
                          Considering constructing my family???s house was always a stressful thought for me.
                          As the time neared that I needed to pursue building our house, thoughts of what people shared to me, and me witnessing their experiences started to flood my mind.
                          Those shared experiences to me were not pleasant ones.
                          From tales of ???be ready to put your marriage to the test??? to ???be ready to financially go over budget??? are just examples of what were confronting me whenever I sought advice from friends who have gone the path of constructing their dream homes.
                          
                          When our turn finally came, I was blessed to have met the team of Arqon.
                          From the onset: discussing the design to discussing the contract, up until finally building, I would summarize the overall experience as smooth, highly professional and most importantly true to commitments.
                          Never in my wildest dreams did I expect to complete our dream house (covid times) in a little less than a year, with the minimal of minimal (I must stress this) of headaches.
                          
                          To summarize, dealing with Arqon was a breeze. Simply put. 
                          Thank you Arqon for making this milestone in my family???s life a positively memorable one. 
                          </span>
                        </p>
                          <span className='clientName'>Ariel Samaniego</span><br/>
                          <span>VIn-Prints, Inc. </span>
                      </div>
                      <div className='slide-comment comment4'>
                        <p>
                          <span>
                            We absolutely love our new home and have received many compliments on it!
                            It was built with the highest quality and turned out even more beautiful than we ever imagined.
                            Seeing the house come to life has been an exciting time for us, and we were very pleased with the prompt attention to detail shown by the team.
                            From start to finish, this has been an enjoyable project thanks to ARQON Design+Build.
                            We love our new dream home! 
                          </span>
                        </p>
                          <span className='clientName'>Mr. & Mrs. D</span><br/>
                          <span>D Residence </span>
                      </div>
                      <div className='slide-comment comment5'>
                        <p>
                          <span>
                          ARQON helped me build my dream house from the planning stage to full completion.
                          When I bought a village lot of 235 sqm, I knew I was in for a major challenge because I had big plans that had to fit in a tiny space.
                          In the tiny 235 sqm, I wanted at least 3 bedrooms, 2 baths, a decent kitchen, a generous living room space, pocket gardens, and as if to make the project even more challenging, I wanted a pool.
                          After two preliminary meetings with Arqon, I was presented with a brilliant plan that incorporates more than what I initially thought.
                          The resulting plan had 4 bedrooms, 3 baths, and all the rest of my specifications, in a coherent layout that I immediately appreciated.
                          It was a very easy sell for me, as my sense of aesthetics and appreciation for logic in architectural design was very much aligned with Arqon???s.
                          In executing the construction plan, three separate contractors were hired.
                          There was a contractor for the building???s foundation and construction of a major retaining wall at the basement level.
                          There was a swimming pool contract.  Finally,  Arqon was the main builder for the actual structure.
                          
                          I give all the contractors, with Arqon as lead, top commendation for the superb result of their work.
                          Today, my house is bordered by tall bamboos that work well to highlight the design aesthetics of the structure, which land squarely in the oxymoron: prominently subdued.
                          I can confidently say that it stands proud as the most beautiful and well thought out in the two streets it is sitting on.
                          As a structure that is testament to the elegance of a self-effacing design, it is a landmark.
                          </span>
                        </p>
                          <span className='clientName'>Michael C.O. Santos</span><br/>
                          <span>The Mango Farm </span>
                      </div>
                      <div className='slide-comment comment5'>
                        <p>
                          <span>
                          When we thought of having our office renovated, I didn???t have a concrete plan of how I wanted it to look like.
                          I knew what we wanted in terms of workflow and layout but the aesthetics, not so much.
                          When April presented their concept, it was perfect!
                          Everything was well thought off and the plan was laid off really well.
                          I was so excited to see our new office, our new ???home???.
                          Even if the construction was affected by the lockdowns, they somehow managed to finish the project swiftly.
                          Everyone was also very easy to work with.
                          From the Architects to the whole team for making our beautiful office, it makes us feel good going to work everyday.
                          </span>
                        </p>
                          <span className='clientName'>Anna Baysic</span><br/>
                          <span>Dexact Printing Services</span>
                      </div>
                      <div className='slide-comment comment5'>
                        <p>
                          <span>
                          Arqon Design+Build helped us in many ways in achieving our dream home.
                          They listened to your inputs very well and gave their honest opinions regarding the layout, material and the whole plan.
                          They treat you  professionally as clients while giving you suggestions like a friend.
                          The team is creative , talented, knowledgeable and most of all, they can be trusted. 
                          </span>
                        </p>
                          <span className='clientName'>Derek and Lea Yee</span><br/>
                          <span>Likhang Malaya Studios and Motorcycle Cinema</span>
                      </div>
                      <div className='slide-comment comment5'>
                        <p>
                          <span>
                          Working with them is one of the best decisions we made in planning our place.
                          Everything was designed based on our input and comfort.
                          The assurance and confidence that we felt during the meeting is one of the factors that made every planning easy.
                          From investing their time during the meetings, considering the budget allocated for the project and patience in taking minor revision, everything works perfectly well.
                          We are more than satisfied with the outcome. Thank you ARQON Design!
                          </span>
                        </p>
                          <span className='clientName'>John Marvi and Wellen Cerda-De Guzman</span><br/>
                          <span>Cinemaworks Wedding Art Film</span>
                      </div>
                  </Slider>
              {/* </div> */}
              </div>
          </div>
          <div className='col-xxl-12 col-xl-6 col-12 row d-flex align-items-center justify-content-center'>
            <div className='col-xxl-5 col-xl-6 contactUsLine px-5 '>
              <h1 className='border-top border-bottom border-3 py-xl-5 py-3 py-xxl-5'>"WE BRING <span>YOUR</span> VISION TO LIFE."</h1>
            </div>
            <div className='col-xxl-6 col-xl-6'>
              <form className='contactUsForm pt-xxl-5 pt-2' onSubmit={handleSubmit(sendMessage)}>
                {/* <div className='headLine'>
                  <span>Let's bring your vission to life.</span>
                </div> */}
                <div className='contactusHead'>
                    <h1 className='text-xxl-white'>Get in touch!</h1>
                </div>
                <div className='formFields '>
                  <div className='py-1 contactField'>
                    <input id='name' type='text' className='form-control rounded-0' placeholder='Full Name'
                      {...register('name', 
                        { required: 'Your name is required' , 
                          minLength: {
                            value: 4,
                            message: 'Minimum length is 4'
                          },
                          maxLength: {
                            value: 20,
                            message: 'Maximum length is 20'
                          }
                        })
                      }
                      ></input>
                      <span>{errors.name?.message}</span>
                  </div>
                  <div className='py-1 contactField'>
                    <input id='email' type='email' className=' form-control rounded-0' placeholder='Email'
                      {...register('email', 
                        { required: 'Email Address Required', 
                          pattern: { 
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ , 
                            message: 'Invalid Email Address'} 
                        })
                        }
                      ></input>
                      <span>{errors.email?.message}</span>
                  </div>
                  <div className='py-1 contactField'>
                    <input id='number' type='text' className=' form-control rounded-0' placeholder='Contact Number'
                      {...register('number', 
                        { required: 'Phone Number Required', 
                          pattern: {
                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im ,
                            message: 'Please enter a valid phone number'
                          } 
                        })
                      }
                    ></input>
                    <span>{errors.number?.message}</span>
                  </div>
                  <div className='py-1 contactField'>
                    <textarea id='message' type='field area' className='textArea form-control rounded-0' placeholder='Hello, I am interested in...'
                    {...register('message',
                      { required: 'You need to enter your message.' , 
                        minLength: {
                          value: 20,
                          message: 'Minimum length is 20'
                        },
                        maxLength: {
                          value: 1000,
                          message: 'Maximum length is 1000'
                        }
                      })
                    } 
                    ></textarea>
                    <span>{errors.message?.message}</span>
                  </div>
                  <div className='pb-xxl-0 pb-xl-3 pb-3'>
                    <button className='contactSubmitBtn' type='submit' id='submit'> Send </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='contactUsImage col-xl-12 col-xxl-5 arqon'>
        </div>
      </div>
    </div>
   
   </section>
  )
}

export default ContactUs