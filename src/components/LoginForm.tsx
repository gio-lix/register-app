import React from 'react';

const LoginForm = () => {
    return (
        <div className="login">
            <strong>Sign In</strong>
            <form>
                <label htmlFor="email">Email</label>
                <div className="input-group">
                    <i className="far fa-paper-plane"></i>
                    <input
                        type="email"
                        required
                    />
                </div>

                <label htmlFor="email">Password</label>
                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input
                        type="email"
                        required
                    />
                </div>

                <div className="btns">
                    <button type="submit">Login</button>
                </div>

                <a href="#" className="forget">Forget Your Password</a>

            </form>
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

export default LoginForm;
