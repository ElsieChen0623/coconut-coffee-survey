import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SurveyForm = () => {
    const [responses, setResponses] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setResponses({ ...responses, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!responses.q1) newErrors.q1 = 'Question 1 is required.';
        // Add more validation for other questions
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', responses);
            // Submit form logic here
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Q1: How do you like your coconut coffee?</label>
                <select name="q1" value={responses.q1} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="sweet">Sweet</option>
                    <option value="bitter">Bitter</option>
                    <option value="strong">Strong</option>
                </select>
                {errors.q1 && <p>{errors.q1}</p>}
            </div>
            {/* Add other questions Q2 to Q9 with conditional rendering as needed */}
            <button type="submit">Submit</button>
        </form>
    );
};

SurveyForm.propTypes = {
    onSubmit: PropTypes.func
};

export default SurveyForm;
