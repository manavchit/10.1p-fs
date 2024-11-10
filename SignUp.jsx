// Form.js
import React, { useState } from 'react';

function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('http://localhost:5000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message); // Display success message
                setEmail(''); // Clear the email field
            } else {
                setMessage(data.message || 'An error occurred'); // Display error message
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to subscribe. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-signup">
                <label id="email">SIGN UP FOR OUR DAILY INSIDER</label>
                <input
                    type="email"
                    className="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>} {/* Display success or error message */}
        </div>
    );
}

export default Form;
