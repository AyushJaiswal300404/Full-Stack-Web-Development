let url = "https://universities.hipolabs.com/search?name=";  // Changed back to name=
let btn = document.querySelector("button");
let input = document.querySelector("input");

btn.addEventListener("click", async () => {
    try {
        let country = input.value || "India";
        let encodedCountry = encodeURIComponent(country);
        let colleges = await getColleges(encodedCountry);
        displayColleges(colleges);
    } catch (err) {
        console.error("Error in click handler:", err);
    }
});

async function getColleges(country) {
    try {
        if (!country.trim()) {
            throw new Error("Please enter a valid country name");
        }

        // Add headers to handle CORS and specify JSON response
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        const response = await axios.get(url + country, config);
        return response.data;
    } catch (err) {
        console.error("Error fetching colleges:", err.message);
        let resultDiv = document.querySelector("#result");
        resultDiv.innerHTML = `<p class="error">Error: ${err.message}</p>`;
        return [];
    }
}

function displayColleges(colleges) {
    const resultDiv = document.querySelector("#result");
    
    if (!colleges || colleges.length === 0) {
        resultDiv.innerHTML = '<p class="error">No colleges found</p>';
        return;
    }

    let html = '';
    colleges.forEach(college => {
        html += `
            <div class="college-card">
                <h3>${college.name}</h3>
                <p>Country: ${college.country}</p>
                <p>State/Province: ${college["state-province"] || "N/A"}</p>
                <a href="${college.web_pages[0]}" target="_blank">Visit Website</a>
            </div>
        `;
    });
    
    resultDiv.innerHTML = html;
}