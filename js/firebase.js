// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4lAz1K8ajP1RcGMNDDnGKwZcz60_eboY",
  authDomain: "weddinginvitation-816dd.firebaseapp.com",
  databaseURL: "https://weddinginvitation-816dd-default-rtdb.firebaseio.com",
  projectId: "weddinginvitation-816dd",
  storageBucket: "weddinginvitation-816dd.appspot.com",
  messagingSenderId: "1009849635487",
  appId: "1:1009849635487:web:1c49f35ba34b0c679a88aa",
  measurementId: "G-C6YZ80RSHN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
const db = getDatabase();
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let guest = document.getElementById("guest");
let message = document.getElementById("message");
let attendance = document.getElementsByName("attendance");
let submit = document.getElementById("submitBtn");
function findSelection() {
  var sizes = attendance.length;
  for (let i = 0; i < sizes; i++) {
    if (attendance[i].checked == true) {
      return attendance[i].value;
    }
  }
}

submit.addEventListener("click", () => {
  if (
    email.value == "" ||
    firstName.value == "" ||
    lastName.value == "" ||
    phone.value == "" ||
    message.value == ""
  ) {
    document.querySelector(".notification-modal").classList.add("active");
    document.querySelector(".notification-modal").classList.add("active");
    document.querySelector(".notification-modal legend").textContent =
      "Send Message Fail";
    document.querySelector(".notification-modal p").textContent =
      "Phát hiện có mục chưa được cấp thông tin, hãy điền đầy đủ thông tin trước khi gửi!!!";
  } else {
    if (findSelection() == "accepts") {
      set(ref(db, "accept/" + Date.now()), {
        FullName: firstName.value + lastName.value,
        Email: email.value,
        PhoneNo: phone.value,
        GuestNumber: guest.value,
        Message: message.value,
      })
        .then(() => {
          Email.send({
            SecureToken: "94a28672-6cd2-4b2a-a9fc-ff982d7dee9f ",
            To: "daotq8297@gmail.com",
            From: "tq.dao0802@gmail.com",
            Subject:
              findSelection() == "accepts"
                ? "Accepts With Pleasure!"
                : "Declines With Regret",
            Body: `<h1>Name: <span style='color: red'>${
              firstName.value + " " + lastName.value
            }</span></h1>
            <i style = "font-size: 18px">Email: <span>${email.value}</span></i>
            <p style = "font-size: 18px">Phone: <span>${phone.value}</span></p>
            <p style = "font-size: 18px">Guest: <span>${guest.value}</span></p>
            <p style = "font-size: 18px">Message: <span>${
              message.value
            }</span></p>`,
          });
          document.querySelector(".notification-modal").classList.add("active");
          document.querySelector(".notification-modal legend").textContent =
            "Thank for Attending";
          document.querySelector(".notification-modal p").textContent =
            "See you in the party";
          document.querySelector("form").reset();
        })
        .catch((error) => {
          alert("Đã xảy ra lỗi!!!");
        });
    } else {
      set(ref(db, "decline/" + Date.now()), {
        FullName: firstName.value + lastName.value,
        Email: email.value,
        PhoneNo: phone.value,
        GuestNumber: guest.value,
        Message: message.value,
      })
        .then(() => {
          Email.send({
            SecureToken: "94a28672-6cd2-4b2a-a9fc-ff982d7dee9f ",
            To: "daotq8297@gmail.com",
            From: "tq.dao0802@gmail.com",
            Subject:
              findSelection() == "accepts"
                ? "Accepts With Pleasure!"
                : "Declines With Regret",
            Body: `<h1>Name: <span style='color: red'>
            ${firstName.value + " " + lastName.value}</span></h1>
                <i style = "font-size: 18px">Email:
                 <span>${email.value}</span></i>
                <p style = "font-size: 18px">Phone:
                 <span>${phone.value}</span></p>
                <p style = "font-size: 18px">Guest: 
                <span>${guest.value}</span></p>
                <p style = "font-size: 18px">Message: 
                <span>${message.value}</span></p>`,
          });
          document.querySelector(".notification-modal").classList.add("active");
          document.querySelector(".notification-modal legend").textContent =
            "See you next time!";
          document.querySelector(".notification-modal p").textContent =
            "Thật tiếc khi không thể gặp bạn ở buổi tiệc của chúng mình!!!";
          document.querySelector("form").reset();
          setTimeout(() => {
            window.scrollTo(0, 7295);
          }, 5000);
        })
        .catch((error) => {
          alert("Đã xảy ra lỗi!!!");
        });
    }
  }
});

document
  .querySelector(".notification-modal button")
  .addEventListener("click", () => {
    document.querySelector(".notification-modal").classList.remove("active");
  });
