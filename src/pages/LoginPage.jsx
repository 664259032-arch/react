import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/action";
import Swal from "sweetalert2";
import { loginService } from "../services/auth.service";
import { useNavigate, Link } from "react-router-dom";

// Placeholder images
const mascotImage = "https://api.dicebear.com/9.x/avataaars/svg?seed=Bunny&backgroundColor=transparent";
const logo = "https://api.dicebear.com/9.x/avataaars/svg?seed=Bunny";

function LoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            // 1. Call API via Service
            const authData = await loginService(form);

            // 2. Extract Token and manage Name
            const token = authData.token;
            const userName = form.email.split('@')[0];

            // 3. Dispatch to Redux
            dispatch(login({ token, name: userName }));

            // 4. Save to Storage
            const dataToSave = { ...authData, name: userName, token };
            if (rememberMe) {
                localStorage.setItem("auth", JSON.stringify(dataToSave));
            } else {
                sessionStorage.setItem("auth", JSON.stringify(dataToSave));
            }

            // 5. Success Alert
            await Swal.fire({
                icon: "success",
                title: "Login Successful 🎉",
                text: `Welcome, ${userName}!`,
                timer: 1500,
                showConfirmButton: false,
            });

            // 6. Navigate to Home
            navigate("/dashboard");

        } catch (err) {
            const message = err.response?.data?.message || "Invalid email or password.";
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: message,
                confirmButtonText: "Try Again",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-[#1a1f2c] text-white">
            {/* Left Side: Mascot & Illustration */}
            <div className="hidden lg:flex flex-1 flex-col justify-center items-center relative p-10">
                <div className="relative w-full max-w-lg text-center">
                    <img
                        src={mascotImage}
                        alt="Mascot"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        style={{ maxHeight: '500px' }}
                    />
                    <h2 className="text-3xl font-bold mt-8 text-center text-gray-200">
                        Login to use our website
                    </h2>

                    {/* Decorative Elements (Stars/Hearts placeholders) */}
                    <div className="absolute top-0 right-10 text-yellow-400 text-4xl animate-pulse">✨</div>
                    <div className="absolute bottom-20 left-10 text-pink-400 text-4xl animate-bounce">❤️</div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="flex-1 flex justify-center items-center bg-white lg:rounded-l-[3rem] p-8 lg:p-16 text-gray-800">
                <div className="w-full max-w-md space-y-8">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <h2 className="text-4xl font-extrabold text-gray-900">LOGIN</h2>
                        <img src={logo} alt="Logo" className="w-16 h-16 rounded-full border-2 border-black" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="input input-bordered w-full bg-white border-gray-300 focus:border-black focus:ring-0 rounded-md"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Password<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="at least 8 digits"
                                value={form.password}
                                onChange={handleChange}
                                required
                                className="input input-bordered w-full bg-white border-gray-300 focus:border-black focus:ring-0 rounded-md"
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember-me"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="checkbox checkbox-sm checkbox-primary rounded-sm"
                            />
                            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600 cursor-pointer select-none">
                                Remember me
                            </label>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-block bg-[#00e676] hover:bg-[#00c853] text-black font-bold text-lg border-none rounded-md shadow-md capitalize"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                        {/* Footer Links */}
                        <div className="flex justify-between items-center text-sm font-medium pt-2">
                            <a href="#" className="text-gray-600 hover:text-black hover:underline">
                                Forgot Password
                            </a>
                            <div className="text-gray-500">
                                Not a member?
                                <a href="#" className="text-blue-600 ml-1 hover:underline">
                                    Sign up now.
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
