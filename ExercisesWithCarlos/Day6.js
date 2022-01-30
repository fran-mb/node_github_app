// Create a application that decides if a person meets the criteria to travel to Thailand.
// The application will ask if a user has (1) Covid Vaccine Certificate, (2) Covid PCR Test, and (3) Willing to have fun. And the user should have all of them.
// There will be 4 applicants and the app should process their applications and provide as an output a message per applicant saying one of these two options:
// (A) SUCCESS: The applicant <Name> meets all the requirement
// (B) NOVAC: The applicant <Name> didn't meet the following requirements: <List of criteria the applicant didn't meet>

// Note: It's mandatory to use the array method MAP in this exercise.

// Data:
// Name: Novac Djockovic; Covid Vaccine Certificate: No; Covid PCR Test: Yes; Willing to have fun: Yes.
// Name: Lelis Suki; Covid Vaccine Certificate: Yes; Covid PCR Test: Yes; Willing to have fun: Yes.
// Name: Sergio Arriaga; Covid Vaccine Certificate: Yes; Covid PCR Test: Yes; Willing to have fun: No.
// Name: Jhony Pink; Covid Vaccine Certificate: No; Covid PCR Test: No; Willing to have fun: No.

const applicant1 = {
  name: "Novac Djockovic",
  covidVaccineCertificate: "No",
  covidPcrTest: "Yes",
  willingToHaveFun: "Yes",
};
const applicant2 = {
  name: "Lelis Suki",
  covidVaccineCertificate: "Yes",
  covidPcrTest: "Yes",
  willingToHaveFun: "Yes",
};
const applicant3 = {
  name: "Sergio Arriaga",
  covidVaccineCertificate: "Yes",
  covidPcrTest: "Yes",
  willingToHaveFun: "No",
};
const applicant4 = {
  name: "Jhony Pink",
  covidVaccineCertificate: "No",
  covidPcrTest: "No",
  willingToHaveFun: "No",
};

const applicants = [applicant1, applicant2, applicant3, applicant4];

function verificationOfApplicant(applicant) {
  if (
    applicant.covidVaccineCertificate === "Yes" &&
    applicant.covidPcrTest === "Yes" &&
    applicant.willingToHaveFun === "Yes"
  ) {
    console.log(
      "You SUCCESS: The applicant",
      applicant.name,
      "meets all the requirement pass"
    );
    return true;
  } else {
    console.log(
      "NOVAC: The applicant",
      applicant.name,
      "didn't meet the following requirements:"
    );
    if (applicant.covidVaccineCertificate === "No")
      console.log("Covid certificate");
    if (applicant.covidPcrTest === "No") console.log("PCR teste");
    if (applicant.willingToHaveFun === "No")
      console.log("You are not willing to have fun");
    return false;
  }
}

applicants.map(verificationOfApplicant);
