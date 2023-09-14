// AyesOnAi/src/sendToBackend/api.js

export const sendToBackend = async (objectName, personNumber, transcript) => {
  try {
    const data = {
      objectName,
      personNumber,
      transcript,
    };

    console.log("Sending data to backend:", data);

    const response = await fetch("http://localhost:3001/api/object-detection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Data sent successfully
      const result = await response.json();
      return result; // Return the response data
    } else {
      // Handle error if the request fails
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    // Handle any network or request errors
    console.error(`Failed to send data to the backend: ${error.message}`);
    throw error;
  }
};
