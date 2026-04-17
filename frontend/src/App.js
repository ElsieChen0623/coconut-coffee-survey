import React, { useState } from 'react';

const CoconutCoffeeSurvey = () => {
    const [responses, setResponses] = useState({});

    const handleChange = (question, value) => {
        setResponses({ ...responses, [question]: value });
    };

    return (
        <div>
            <h1>Coconut Coffee Survey</h1>
            <form>
                {/* Q1: Do you like coconut coffee? */}
                <div>
                    <label>Q1: Do you like coconut coffee?</label>
                    <select onChange={(e) => handleChange('Q1', e.target.value)}>
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Q2-A9 Conditional Questions Based on Q1 */}
                {responses.Q1 === 'yes' && (
                    <div>
                        <label>Q2: What do you like most about it?</label>
                        <input type="text" onChange={(e) => handleChange('Q2', e.target.value)} />
                    </div>
                )}

                {responses.Q1 === 'no' && (
                    <div>
                        <label>Q3: Why don’t you like it?</label>
                        <input type="text" onChange={(e) => handleChange('Q3', e.target.value)} />
                    </div>
                )}

                {/* Implement additional questions Q4 to Q9 with similar conditional logic */}
                {/* Example for Q4 */}
                {responses.Q1 === 'yes' && (
                    <div>
                        <label>Q4: How often do you drink coconut coffee?</label>
                        <input type="text" onChange={(e) => handleChange('Q4', e.target.value)} />
                    </div>
                )}

                {/* Final Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CoconutCoffeeSurvey;