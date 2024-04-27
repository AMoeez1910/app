import React, { useState } from 'react';
import '../assets/css/Steps-Progressbar.css';
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
const StepProgress = () => {
    const [active, setActive] = useState(0);
    const [image,setImage] = useState(img1)

    const handleClick = (value) => {
        setActive(value);
        switch (value) {
            case 0:
                setImage(img1);
                break;
            case 1:
                setImage(img2);
                break;
            case 2:
                setImage(img3);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <section className="py-4 py-xl-5">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                            <div>
                                <h2 className="text-uppercase fw-bold mb-3">
                                    Create Your Own  <span style={{color:'#4d2692'}}>Avatar</span>
                                </h2>
                                <div className="steps-progressbar">
                                    <ul>
                                        <li onClick={() => handleClick(0)} className={active === 0 ? 'active':""} >
                                            Step 1 : Choose Gender
                                        </li>
                                        <li onClick={() => handleClick(1)} className={active === 1 ? 'active':""}>
                                            Step 2 : Choose Style
                                        </li>
                                        <li onClick={() => handleClick(2)} className={active === 2 ? 'active':""}>
                                            Step 3: Upload Photos
                                        </li>
                                        <li onClick={() => handleClick(3)} className={active === 3 ? 'active':""}>
                                            Generate
                                        </li>
                                    </ul>
                                </div>
                                <p className="mb-4" />
                                <div>
                                <img src={image} style={{width:'50%'}}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StepProgress;
