const URI = 'http://localhost:8000';

export default {
    async fetchStudents() {
        try {
            let response = await fetch(URI + '/api/students');
            let responseJsonData = await response.json();
            return responseJsonData;
        }
        catch (e) {
            console.log(e)
        }
    }
}
