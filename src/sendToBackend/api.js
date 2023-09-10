// AyesOnAi/src/sendToBackend/api.js

//  test Example function for sending data to your backend AI
export const sendToBackend = async (objectName, personNumber, transcript) => {
  try {
    const data = {
      objectName,
      personNumber,
      transcript,
    };

    console.log("Sending data to backend:", data);

    const response = await fetch("/your-backend-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Data sent successfully
      const result = await response.json();
      return result;
    } else {
      // Handle error if the request fails
      throw new Error("Failed to send data to the backend.");
    }
  } catch (error) {
    // Handle any network or request errors
    console.error("Error:", error);
    throw error;
  }
};
