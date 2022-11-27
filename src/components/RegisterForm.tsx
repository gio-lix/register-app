import React, {useState} from 'react';

const RegisterForm = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const plusIndex = (n: number) => {
        setCurrentIndex(prev => prev + n)
    }

    const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        plusIndex(1)
    }

    return (
        <div className="register">
            <strong>Sign Up</strong>
            <div className="progress-bar">
                <ul>
                    <div className="progress" style={{marginLeft: `calc(100% / 3 * ${currentIndex})`}}>
                    </div>
                    {
                        ["Name", "Content", "Birth", "Submit"].map((item, index) => (
                            <li
                                key={item}
                                data-title={item}
                                className={`${currentIndex >= index ? "active" : ""}`}
                            >
                                {index + 1}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div
                style={{marginLeft: `${currentIndex * -100}%`}}
                className="wrapper" >
                {/* Basic Info */}
                <form onSubmit={handleNext}>
                    {/*first name*/}
                    <label>First Name</label>
                    <div className="input-group">
                        <i className="fa-solid fa-user"></i>
                        <input
                            type="text"
                            required
                        />
                    </div>

                    {/*first name*/}
                    <label>Last Name</label>
                    <div className="input-group">
                        <i className="fa-solid fa-user"></i>
                        <input
                            type="text"
                            required
                        />
                    </div>

                    <div className="btns">
                        <button type="submit">Next</button>
                    </div>
                </form>
                {/*Contact Info*/}
                <form onSubmit={handleNext}>
                    <label>Email</label>
                    <div className="input-group">
                        <i className="far fa-paper-plane"></i>
                        <input
                            type="email"
                            required
                        />
                    </div>

                    <label>Phone Number</label>
                    <div className="input-group">
                        <i className="fas fa-lock"></i>
                        <input
                            type="number"
                            required
                        />
                    </div>

                    <div className="btns">
                        <button type="submit">Next</button>
                        <button onClick={() => plusIndex(-1)} type="button">Prev</button>
                    </div>
                </form>
                {/* Date of birth */}
                <form onSubmit={handleNext}>
                    <label>Date</label>
                    <div className="input-group">
                        <i className="far fa-copy"></i>
                        <input
                            type="date"
                            required
                        />
                    </div>

                    {/* Gender */}
                    <label>Gender</label>
                    <div className="input-group">
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>


                    <div className="btns">
                        <button type="submit">Next</button>
                        <button onClick={() => plusIndex(-1)} type="button">Prev</button>
                    </div>
                </form>
                {/* Submit */}
                <form onSubmit={handleNext}>
                    <label>Date</label>
                    <div className="input-group">
                        <i className="fa-solid fa-user"></i>
                        <input
                            type="text"
                            required
                        />
                    </div>

                    {/* Password */}
                    <label>Password</label>
                    <div className="input-group">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            required
                        />
                    </div>

                    <div className="btns">
                        <button onClick={() => plusIndex(-1)} type="button">Prev</button>
                        <button type="submit">Register</button>
                    </div>
                </form>

            </div>

            <div className="intro-text">
                <span>Welcome To This Site</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur consequuntur corporis
                    cum cupiditate debitis dolores eaque eos ex facilis fugiat in magni modi molestiae natus
                    necessitatibus nihil non nulla, omnis possimus quam repellat repudiandae sapiente sequi
                    recusandae, repellendus sapiente!
                </p>

            </div>
        </div>
    );
};

export default RegisterForm;