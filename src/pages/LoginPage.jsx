import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/action";
import Swal from "sweetalert2";
import { loginService } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

// Placeholder images - using colored divs or placeholders if images missing
const logo = "https://placehold.co/150x50?text=Logo";
const authImage = "https://placehold.co/600x600?text=Auth+Illustration";

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

            // Extract name from email as per request
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
            navigate("/");

        } catch (err) {
            // Handle error
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
        <div className="min-h-screen flex flex-col lg:flex-row bg-white justify-center lg:justify-end items-center lg:items-start gap-8 lg:gap-20 px-4 pt-8 lg:pt-24 text-black"
            style={{ minHeight: '100vh', display: 'flex', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', color: 'black' }}>

            {/* Illustration Section */}
            <div className="flex flex-col items-center justify-center mb-10 lg:mb-0 lg:mr-20 hidden lg:flex">
                <img src={authImage} alt="Auth" style={{ maxWidth: '500px' }} />
                <p className="font-bold text-center text-2xl mt-4">
                    Login to use our website
                </p>
            </div>

            {/* Login Form Card */}
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative border border-gray-100"
                style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', width: '100%', maxWidth: '400px', padding: '24px', border: '1px solid #f3f4f6' }}>

                <div className="absolute top-4 right-4" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <img src={logo} alt="logo" style={{ height: '40px' }} />
                </div>

                <h2 className="text-2xl font-extrabold mb-6 text-center lg:text-left" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>LOGIN</h2>

                <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label className="block font-semibold mb-1" style={{ display: 'block', fontWeight: '600', marginBottom: '0.25rem' }}>Email<span className="text-red-500" style={{ color: '#ef4444' }}>*</span></label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1" style={{ display: 'block', fontWeight: '600', marginBottom: '0.25rem' }}>Password<span className="text-red-500" style={{ color: '#ef4444' }}>*</span></label>
                        <input
                            type="password"
                            name="password"
                            placeholder="at least 8 characters"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}
                        />
                    </div>

                    <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <input
                            type="checkbox"
                            id="remember"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer' }}
                        />
                        <label htmlFor="remember" style={{ cursor: 'pointer', userSelect: 'none' }}>Remember me</label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn w-full"
                        style={{
                            width: '100%',
                            backgroundColor: loading ? '#9ca3af' : '#4ade80',
                            color: 'black',
                            fontSize: '1.125rem',
                            fontWeight: '700',
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            border: 'none',
                            cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </div>

                <div className="flex justify-between items-center text-sm mt-6" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', fontSize: '0.875rem' }}>
                    <p style={{ cursor: 'pointer', color: '#4b5563' }} className="hover:underline">Forgot Password?</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>Not a member?</span>
                        <button
                            type="button"
                            style={{ color: '#3b82f6', marginLeft: '0.5rem', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer' }}
                            className="hover:underline"
                            onClick={() => alert("Navigate to Register")}
                        >
                            Sign up now.
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
