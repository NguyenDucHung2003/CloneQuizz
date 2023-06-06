import {
     questionData,
     questionDataCheckBox,
     questionDataButton,
     questionOptions,
     questionText,
} from "./Data.js"
const $ = (id) => document.getElementById(id)
let x = JSON.parse(localStorage.getItem("countacc"))
if (x <= 0) {
     window.location.href = "Dangnhap.html"
}
const check = (data) => {
     if (data.type === "questionRadio") {
          let LastData = []
          const questions = JSON.parse(localStorage.getItem("questions"))
          questions.forEach((question) => {
               question.forEach((answer) => {
                    if (answer.typeQuestion === "questionRadio") {
                         LastData.push(answer)
                    }
               })
          })
          LastData.push(data)
          return `<div class="TypeRadio" id="${
               data.id
          }"> <div class="Question_Radio">${data.question}</div>
      <div class="Answers_Radio">
        ${data.answers
             .map((answer) => {
                  let checked = false
                  LastData.forEach((answers) => {
                       if (
                            answer.id ===
                            `${answers.numberAnswer}_${answers.result}`
                       ) {
                            checked = true
                       }
                  })
                  if (checked)
                       return `<div class="RadioChecked"><input type="radio" checked id="${answer.id}" value="${answer.label}" 
               } /> <label for="${answer.id}">${answer.label}</label></div>`
                  return `<div class="TypeQuestionRadioChild"> <input type="radio" id="${answer.id}" value="${answer.label}" 
                  } /> <label for="${answer.id}">${answer.label}</label></div>
                 
                  `
             })
             .join("")}
      </div>
      <div class="AnswerYesRadio">Đáp án của câu hỏi là ${
           data.answerYes.label
      } </div></div>
      `
     }
     if (data.type === "questionCheckBox") {
          let LastDataCheckBox = []
          const questions = JSON.parse(localStorage.getItem("questions"))
          questions.forEach((question) => {
               question.forEach((answer) => {
                    if (answer.typeQuestion === "questionCheckBox") {
                         LastDataCheckBox.push(answer)
                    }
               })
          })
          LastDataCheckBox.push(data)
          return `<div class="TypeCheckBox" id="${
               data.id
          }"> <div class="Question_Button">${data.question}</div>
      <div class="Answers_Button">
        ${data.answers
             .map((answer) => {
                  let checked = false
                  LastDataCheckBox.forEach((answers) => {
                       if (
                            answer.id ===
                            `${answers.numberAnswer_CheckBox}_${answers.result_CheckBox}`
                       ) {
                            checked = true
                       }
                  })
                  if (checked)
                       return `<div class="CheckBoxChecked"> <input type="checkbox" id="${answer.id}" value="${answer.label}" checked /> <label for="${answer.id}">${answer.label}</label>
                </div>`
                  return `<div class="TypeQuestionCheckBoxChild"> <input type="checkbox" id="${answer.id}" value="${answer.label}"  /> <label for="${answer.id}">${answer.label}</label>
                </div>`
             })
             .join("")}
      </div>
      ${data.answerYes
           .map((answer) => {
                return `<div class="AnswerYesCheckBox">Đáp án của câu hỏi là ${answer.label}</div>`
           })
           .join("")}</div>
      `
     }
}
let DataButton = []
const questionsButton = JSON.parse(localStorage.getItem("questions"))
questionsButton.forEach((question) => {
     question.forEach((answer) => {
          if (answer.typeQuestion === "questionButton") {
               DataButton.push(answer)
          }
     })
})
const number_resultsButtonArray = DataButton.map((data) => {
     if (
          data.numberAnswer_Button !== undefined &&
          data.result_Button !== undefined
     ) {
          return `${data.numberAnswer_Button}_${data.result_Button}`
     }
})

const getDataButton = (data) => {
     return `<div class="TypeQuestionButton" id="${
          data.id
     }" > <div class = "Question_Button">${data.question}</div>
     ${data.answers
          .map((answer) => {
               if (number_resultsButtonArray.includes(answer.id))
                    return `<div class="ButtonChecked"> <input type="button" class="active" id ="${answer.id}" name="question_${answer.id}" value ="${answer.label}"> </div>`
               return `<div class="TypeQuestionButtonChild"> <input type="button" id ="${answer.id}" name="question_${answer.id}" value ="${answer.label}"> </div>`
          })
          .join("")}
          <div class="AnswerYesButton">Đáp án của câu hỏi là ${
               data.answerYes.label
          }</div></div>
     `
}

const getDataText = (data) => {
     let arrayText = []
     let datas = JSON.parse(localStorage.getItem("questions"))

     datas.forEach((question) => {
          question.forEach((answer) => {
               if (answer.typeQuestion === "questionText") {
                    arrayText.push(answer)
               }
          })
     })
     return `<div class="TypeQuestionText" id="${data.id}">
          <div class="Question_Text">${data.question}</div>
           <div class="Answers_Text">
           ${arrayText
                .map((answers) => {
                     if (`${answers.numberAnswer_Text}` == data.id) {
                          return `<input type="text" id="${data.id}" name="question_${data.id}" value="${answers.result_Text}" readonly/>`
                     }
                })
                .join("")}
          </div>
          <div class="AnswerYesText">Đáp án của câu hỏi là ${
               data.answersYes
          }</div></div>
          `
}
const dataQuestionOption = JSON.parse(localStorage.getItem("questions"))
let listQuestionOption = []
dataQuestionOption.forEach((question) => {
     question.forEach((answer) => {
          if (answer.typeQuestion === "questionOptions") {
               listQuestionOption.push(answer)
          } else {
               return
          }
     })
})
let currentElement = 0
const getDataOptionsFake = (data) => {
     const answerInputs = data.answers
          .map((answer) => {
               return `<input type="text" id="${answer.id}" name="question_${data.id}" value="${answer.label}" />
          <br />`
          })
          .join("")
     return ` <div class="TypeQuestionOption" id="${data.id}">
        <div class="Question_Options">${data.question}</div>
        <div class="QuestionAnswers_Options">
          ${answerInputs}
        </div>
        <div class="Answers_Options">
        <select name="answer_${data.id}_a" id ="answer_${data.id}_a" >
          ${data.answerYes.map((answer, index) => {
               let x = [currentElement]
               if (index === data.answerYes.length - 1) {
                    currentElement++
               }
               let k = listQuestionOption[x]
               if (
                    answer.id ===
                    `${k.numberAnswer_Options}_${k.result_Options}`
               )
                    return `<option id = "option_${answer.id}_index_${index}" selected value="${answer.value}" >${answer.label}</option>`
          })}
                       
          </select>
          <select name="answer_${data.id}_a" id ="answer_${data.id}_b" >
          ${data.answerYes.map((answer, index) => {
               let x = [currentElement]
               if (index === data.answerYes.length - 1) {
                    currentElement++
               }

               let k = listQuestionOption[x]

               if (
                    answer.id ===
                    `${k.numberAnswer_Options}_${k.result_Options}`
               )
                    return `<option id = "option_${answer.id}_index_${index}" selected value="${answer.value}" >${answer.label}</option>`
          })}
         </select>
         <select name="answer_${data.id}_a" id ="answer_${data.id}_c" >    
     ${data.answerYes.map((answer, index) => {
          let x = [currentElement]
          if (index === data.answerYes.length - 1) {
               currentElement++
          }
          let k = listQuestionOption[x]
          if (answer.id === `${k.numberAnswer_Options}_${k.result_Options}`)
               return `<option id = "option_${answer.id}_index_${index}" selected value="${answer.value}" >${answer.label}</option>`
     })}       
          </select>
          <select name="answer_${data.id}_a" id ="answer_${data.id}_d" >     
     ${data.answerYes.map((answer, index) => {
          let x = [currentElement]
          if (index === data.answerYes.length - 1) {
               currentElement++
          }
          let k = listQuestionOption[x]
          if (answer.id === `${k.numberAnswer_Options}_${k.result_Options}`)
               return `<option id = "option_${answer.id}_index_${index}" selected value="${answer.value}" >${answer.label}</option>`
     })}               
         </select>
        </div>
        ${data.yesAnswerYes
             .map((answer, index) => {
                  const question = data.answers[index]
                  return `<div class="AnswerYesSelect">${
                       index + 1
                  }. Đáp án của câu hỏi ${question.label}  là ${
                       answer.label
                  }</div>`
             })
             .join("")}
             </div>
      `
}
VoidDataText()
function VoidDataText() {
     const divText = document.getElementById("container_Text_TrangCuoi")
     const html = questionText.map((question) => getDataText(question)).join("")
     divText.innerHTML = html
}

VoidDataRadio()
function VoidDataRadio() {
     const divRadio = document.getElementById("container_TrangCuoi")
     const html = questionData.map((question) => check(question)).join("")
     divRadio.innerHTML = html
}

VoidDataCheckBox()
function VoidDataCheckBox() {
     const divCheckBox = document.getElementById("container_CheckBox_TrangCuoi")
     const html = questionDataCheckBox
          .map((question) => check(question))
          .join("")
     divCheckBox.innerHTML = html
}
VoidDataButton1()
function VoidDataButton1() {
     const divButton = document.getElementById("container_Button_TrangCuoi")
     const html = questionDataButton
          .map((question) => getDataButton(question))
          .join("")
     divButton.innerHTML = html
}
VoidDataOptions()
function VoidDataOptions() {
     const divButton = document.getElementById("container_Options_TrangCuoi")
     const html = questionOptions
          .map((question) => getDataOptionsFake(question))
          .join("")
     divButton.innerHTML = html
}

// let disabledButtons = document.getElementsByTagName("input")
// for (let i = 0; i < disabledButtons.length; i++) {
//      disabledButtons[i].disabled = true
// }
let disabledButtonRadio = document.querySelectorAll("input[type=radio]")
for (let i = 0; i < disabledButtonRadio.length; i++) {
     disabledButtonRadio[i].disabled = true
}
let disabledButtonCheckBox = document.querySelectorAll("input[type=checkbox]")
for (let i = 0; i < disabledButtonCheckBox.length; i++) {
     disabledButtonCheckBox[i].disabled = true
}
let getQuestionToLocal = localStorage.getItem("UserNow")
let accounts = JSON.parse(getQuestionToLocal)
let getQuestionToLocalCount = localStorage.getItem("count")
let count = JSON.parse(getQuestionToLocalCount)
information()
function information() {
     const divInformation = document.getElementById("container_count_TrangCuoi")
     const htmkl = `
               <div class="Information_Account">Thông tin cá nhân</div>
               <div class = "Account">
               <div class="Information_Account_Name">Tên: ${accounts.UserName}</div>
               <div class="Information_Account_Email">Email: ${accounts.UserEmail}</div>
               <div class="Information_Account_Phone">Số điện thoại :${accounts.UserPhone}</div>
               <div class="Count">Số điểm bạn đạt được : ${count} điểm</div>
               </div>
               `
     // console.log(htmkl)
     divInformation.innerHTML = htmkl
}
const LastDataRadio = []
const questionsRadio = JSON.parse(localStorage.getItem("questions"))
questionsRadio.forEach((question) => {
     question.forEach((answer) => {
          if (answer.typeQuestion === "questionRadio") {
               LastDataRadio.push(answer)
          }
     })
})
const LastDataCheckBox = []
const questionsCheckBox = JSON.parse(localStorage.getItem("questions"))
questionsCheckBox.forEach((question) => {
     question.forEach((answer) => {
          if (answer.typeQuestion === "questionCheckBox") {
               LastDataCheckBox.push(answer)
          }
     })
})
const number_resultsCheckBoxArray = LastDataCheckBox.map((data) => {
     if (
          data.numberAnswer_CheckBox !== undefined &&
          data.result_CheckBox !== undefined
     ) {
          return `${data.numberAnswer_CheckBox}_${data.result_CheckBox}`
     }
})

const LastDataOptions = []
const questionsOptions = JSON.parse(localStorage.getItem("questions"))
questionsOptions.forEach((question) => {
     question.forEach((answer) => {
          if (answer.typeQuestion === "questionOptions") {
               LastDataOptions.push(answer)
          }
     })
})
const number_resultsOptionsArray = LastDataOptions.map((data) => {
     if (
          data.numberAnswer_Options !== undefined &&
          data.result_Options !== undefined
     ) {
          return `${data.numberAnswer_Options}_${data.result_Options}`
     }
})
const LastDataText = []
const questionsText = JSON.parse(localStorage.getItem("questions"))
questionsText.forEach((question) => {
     question.forEach((answer) => {
          if (answer.typeQuestion === "questionText") {
               LastDataText.push(answer)
          }
     })
})
$("container-map").innerHTML = `<table>
<tr>
     ${questionData
          .map((x) => {
               let check = false
               LastDataRadio.forEach((answer) => {
                    if (
                         x.answerYes.id ===
                         `${answer.numberAnswer}_${answer.result}`
                    )
                         check = true
               })
               if (check)
                    return `<td class="dung"><a href="#${x.id}">${x.id}</a></td>`
               return `<td class="sai"><a href="#${x.id}">${x.id}</a></td>`
          })
          .join("")}
</tr>
<tr>
     ${questionDataCheckBox
          .map((x) => {
               let check = false
               x.answerYes.forEach((answer) => {
                    if (number_resultsCheckBoxArray.includes(answer.id)) {
                         check = true
                    } else {
                         check = false
                    }
               })
               if (check)
                    return `<td class="dung"><a href="#${x.id}">${x.id}</a></td>`
               return `<td class="sai"><a href="#${x.id}">${x.id}</a></td>`
          })
          .join("")}
</tr>
<tr>
     ${questionDataButton
          .map((x) => {
               let check = false
               DataButton.forEach((answer) => {
                    if (
                         x.answerYes.id ===
                         `${answer.numberAnswer_Button}_${answer.result_Button}`
                    )
                         check = true
               })

               if (check)
                    return `<td class="dung"><a href="#${x.id}">${x.id}</a></td>`
               return `<td class="sai"><a href="#${x.id}">${x.id}</a></td>`
          })
          .join("")}
</tr>
<tr>
     ${questionOptions
          .map((x) => {
               let checked = false
               for (let i = 0; i < x.yesAnswerYes.length; i++) {
                    if (
                         x.yesAnswerYes[i].id === number_resultsOptionsArray[i]
                    ) {
                         checked = true
                    } else {
                         checked = false
                    }
               }
               if (checked)
                    return `<td class="dung"><a href="#${x.id}">${x.id}</a></td>`
               return `<td class="sai"><a href="#${x.id}">${x.id}</a></td>`
          })
          .join("")}
</tr>
<tr>
     ${questionText
          .map((x, index) => {
               let checked = false
               if (
                    `${x.id}_${x.answersYes}` ==
                    `${LastDataText[index].numberAnswer_Text}_${LastDataText[index].result_Text}`
               ) {
                    checked = true
               } else {
                    checked = false
               }

               if (checked)
                    return `<td class="dung"><a href="#${x.id}">${x.id}</a></td>`
               return `<td class="sai"><a href="#${x.id}">${x.id}</a></td>`
          })
          .join("")}
</tr>
     <div id="Check_Yes">
     Màu xanh là đáp án của bạn chính xác
     </div>
     <div id="Check_No">
     Màu đỏ là đáp án của bạn sai
     </div>

</table>`
