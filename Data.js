const questionData = [
     {
          id: 1,
          type: "questionRadio",
          question: "Câu 1. CSS là viết tắt của?",
          answers: [
               { id: "1_a", value: "a", label: "Creative Style Sheets" },
               { id: "1_b", value: "b", label: "Computer Style Sheets" },
               { id: "1_c", value: "c", label: "Cascading Style Sheets" },
               { id: "1_d", value: "d", label: "Cascade Style Sheets" },
          ],
          answerYes: {
               id: "1_a",
               value: "a",
               label: "Cascading Style Sheets",
          },
     },
     {
          id: 2,
          type: "questionRadio",
          question:
               "Câu 2. Phần nào của file HTML được đặt mã tham chiếu tới CSS bên ngoài?",
          answers: [
               { id: "2_a", value: "a", label: "Trong thẻ 	&lt;body&gt;" },
               { id: "2_b", value: "b", label: "Ở phía cuối của file HTML" },
               { id: "2_c", value: "c", label: "Ở phần đầu của file HTML" },
               { id: "2_d", value: "d", label: "Trong thẻ &lt;head&gt;" },
          ],
          answerYes: {
               id: "2_a",
               value: "a",
               label: "Trong thẻ <head>",
          },
     },
     {
          id: 3,
          type: "questionRadio",
          question:
               "Câu 3. Phần nào của file HTML được đặt mã tham chiếu tới CSS bên ngoài?",
          answers: [
               { id: "3_a", value: "a", label: "Trong thẻ <body>" },
               { id: "3_b", value: "b", label: "Ở phía cuối của file HTML" },
               { id: "3_c", value: "c", label: "Ở phần đầu của file HTML" },
               { id: "3_d", value: "d", label: "Trong thẻ <head>" },
          ],
          answerYes: {
               id: "3_a",
               value: "a",
               label: "Trong thẻ <head>",
          },
     },
     {
          id: 4,
          type: "questionRadio",
          question:
               "Câu 4.Phần nào của file HTML được đặt mã tham chiếu tới CSS bên ngoài?",
          answers: [
               { id: "4_a", value: "a", label: "Trong thẻ <body>" },
               { id: "4_b", value: "b", label: "Ở phía cuối của file HTML" },
               { id: "4_c", value: "c", label: "Ở phần đầu của file HTML" },
               { id: "4_d", value: "d", label: "Trong thẻ <head>" },
          ],
          answerYes: {
               id: "4_a",
               value: "a",
               label: "Trong thẻ <head>",
          },
     },
     {
          id: 5,
          type: "questionRadio",
          question:
               "Câu 5.Phần nào của file HTML được đặt mã tham chiếu tới CSS bên ngoài?",
          answers: [
               { id: "5_a", value: "a", label: "Trong thẻ <body>" },
               { id: "5_b", value: "b", label: "Ở phía cuối của file HTML" },
               { id: "5_c", value: "c", label: "Ở phần đầu của file HTML" },
               { id: "5_d", value: "d", label: "Trong thẻ <head>" },
          ],
          answerYes: {
               id: "5_a",
               value: "a",
               label: "Trong thẻ <head>",
          },
     },
]
const questionDataCheckBox = [
     {
          id: 6,
          type: "questionCheckBox",
          question: "6.What is the capital of Vietnam?",
          answers: [
               { id: "6_a", value: "a", label: "Ha Noi" },
               { id: "6_b", value: "b", label: "TPHCM" },
               { id: "6_c", value: "c", label: "HP" },
               { id: "6_d", value: "d", label: "DN" },
          ],
          answerYes: [
               {
                    id: "6_a",
                    value: "a",
                    label: "Ha Noi",
               },
               {
                    id: "6_b",
                    value: "b",
                    label: "TPHCM",
               },
          ],
     },
     {
          id: 7,
          type: "questionCheckBox",
          question: "7.HTML stands for...?",
          answers: [
               { id: "7_a", value: "a", label: "Hyper Text Markup Language" },
               { id: "7_b", value: "b", label: "hypertensi markup language" },
               { id: "7_c", value: "c", label: "hypertensi markup language" },
               { id: "7_d", value: "d", label: "hypertensi markup language" },
          ],
          answerYes: [
               {
                    id: "7_a",
                    value: "a",
                    label: "Hyper Text Markup Language",
               },
          ],
     },
     {
          id: 8,
          type: "questionCheckBox",
          question: "8.HTML stands for...?",
          answers: [
               { id: "8_a", value: "a", label: "Hyper Text Markup Language" },
               { id: "8_b", value: "b", label: "hypertensi markup language" },
               { id: "8_c", value: "c", label: "hypertensi markup language" },
               { id: "8_d", value: "d", label: "hypertensi markup language" },
          ],
          answerYes: [
               {
                    id: "8_a",
                    value: "a",
                    label: "Hyper Text Markup Language",
               },
          ],
     },
     {
          id: 9,
          type: "questionCheckBox",
          question: "9.HTML stands for...?",
          answers: [
               { id: "9_a", value: "a", label: "Hyper Text Markup Language" },
               { id: "9_b", value: "b", label: "hypertensi markup language" },
               { id: "9_c", value: "c", label: "hypertensi markup language" },
               { id: "9_d", value: "d", label: "hypertensi markup language" },
          ],
          answerYes: [
               {
                    id: "9_a",
                    value: "a",
                    label: "Hyper Text Markup Language",
               },
          ],
     },
     {
          id: 10,
          type: "questionCheckBox",
          question: "10.HTML stands for...?",
          answers: [
               { id: "10_a", value: "a", label: "Hyper Text Markup Language" },
               { id: "10_b", value: "b", label: "hypertensi markup language" },
               { id: "10_c", value: "c", label: "hypertensi markup language" },
               { id: "10_d", value: "d", label: "hypertensi markup language" },
          ],
          answerYes: [
               {
                    id: "10_a",
                    value: "a",
                    label: "Hyper Text Markup Language",
               },
          ],
     },
]
const questionDataButton = [
     {
          id: 11,
          type: "questionButton",
          question: "11.What is the capital of Vietnam?",
          answers: [
               { id: "11_a", value: "a", label: "A.Ha Noi" },
               { id: "11_b", value: "b", label: "B.TPHCM" },
               { id: "11_c", value: "c", label: "C.HP" },
               { id: "11_d", value: "d", label: "D.DN" },
          ],
          answerYes: {
               id: "11_a",
               value: "a",
               label: "Ha Noi",
          },
     },
     {
          id: 12,
          type: "questionButton",
          question: "12.HTML stands for...?",
          answers: [
               {
                    id: "12_a",
                    value: "a",
                    label: "A.Hyper Text Markup Language",
               },
               {
                    id: "12_b",
                    value: "b",
                    label: "B.hypertensi markup language",
               },
               { id: "12_c", value: "c", label: "C. Đáp án C" },
               { id: "12_d", value: "d", label: "D.Đáp án D" },
          ],
          answerYes: {
               id: "12_a",
               value: "a",
               label: "Hyper Text Markup Language",
          },
     },
     {
          id: 13,
          type: "questionButton",
          question: "13.HTML stands for...?",
          answers: [
               {
                    id: "13_a",
                    value: "a",
                    label: "A.Hyper Text Markup Language",
               },
               {
                    id: "13_b",
                    value: "b",
                    label: "B.hypertensi markup language",
               },
               { id: "13_c", value: "c", label: "C. Đáp án C" },
               { id: "13_d", value: "d", label: "D.Đáp án D" },
          ],
          answerYes: {
               id: "13_a",
               value: "a",
               label: "Hyper Text Markup Language",
          },
     },
     {
          id: 14,
          type: "questionButton",
          question: "14.HTML stands for...?",
          answers: [
               {
                    id: "14_a",
                    value: "a",
                    label: "A.Hyper Text Markup Language",
               },
               {
                    id: "14_b",
                    value: "b",
                    label: "B.hypertensi markup language",
               },
               { id: "14_c", value: "c", label: "C. Đáp án C" },
               { id: "14_d", value: "d", label: "D.Đáp án D" },
          ],
          answerYes: {
               id: "14_a",
               value: "a",
               label: "Hyper Text Markup Language",
          },
     },
     {
          id: 15,
          type: "questionButton",
          question: "15.HTML stands for...?",
          answers: [
               {
                    id: "15_a",
                    value: "a",
                    label: "A.Hyper Text Markup Language",
               },
               {
                    id: "15_b",
                    value: "b",
                    label: "B.hypertensi markup language",
               },
               { id: "15_c", value: "c", label: "C. Đáp án C" },
               { id: "15_d", value: "d", label: "D.Đáp án D" },
          ],
          answerYes: {
               id: "15_a",
               value: "a",
               label: "Hyper Text Markup Language",
          },
     },
]
const questionOptions = [
     {
          id: 16,
          type: "questionOptions",
          question: "16.Lựa chọn đáp án phù hợp với nội dung bên trái",
          answers: [
               { id: "16_a", value: "a", label: "Điểm trung bình 9,6" },
               { id: "16_b", value: "b", label: "Điểm trung bình 1,5" },
               { id: "16_c", value: "c", label: "Điểm trung bình 5,5" },
               { id: "16_d", value: "d", label: "Điểm trung bình 7" },
          ],
          answerYes: [
               {
                    id: "16_a",
                    value: "a",
                    label: "Học sinh giỏi",
               },
               {
                    id: "16_b",
                    value: "b",
                    label: "Học sinh khá",
               },
               {
                    id: "16_c",
                    value: "c",
                    label: "Học sinh trung bình",
               },
               {
                    id: "16_d",
                    value: "d",
                    label: "Học sinh kém",
               },
          ],
          yesAnswerYes: [
               {
                    id: "16_d",
                    value: "d",
                    label: "Học sinh kém",
               },
               {
                    id: "16_c",
                    value: "c",
                    label: "Học sinh trung bình",
               },
               {
                    id: "16_b",
                    value: "b",
                    label: "Học sinh khá",
               },
               {
                    id: "16_a",
                    value: "a",
                    label: "Học sinh giỏi",
               },
          ],
     },
     {
          id: 17,
          type: "questionOptions",
          question: "17.Lựa chọn đáp án phù hợp với nội dung bên trái",
          answers: [
               { id: "17_a", value: "a", label: "Bên trái có gì" },
               { id: "17_b", value: "b", label: "Bên phải có gì" },
               { id: "17_c", value: "c", label: "Bên trên có gì" },
               { id: "17_d", value: "d", label: "Bên dưới có gì" },
          ],
          answerYes: [
               {
                    id: "17_a",
                    value: "a",
                    label: "Bên trái không có gì",
               },
               {
                    id: "17_b",
                    value: "b",
                    label: "Bên phải không có gì",
               },
               {
                    id: "17_c",
                    value: "c",
                    label: "Bên trên không có gì",
               },
               {
                    id: "17_d",
                    value: "d",
                    label: "Bên dưới không có gì",
               },
          ],
          yesAnswerYes: [
               {
                    id: "17_b",
                    value: "b",
                    label: "Bên phải không có gì",
               },
               {
                    id: "17_c",
                    value: "c",
                    label: "Bên trên không có gì",
               },
               {
                    id: "17_d",
                    value: "d",
                    label: "Bên dưới không có gì",
               },
               {
                    id: "17_a",
                    value: "a",
                    label: "Bên trái không có gì",
               },
          ],
     },
     {
          id: 18,
          type: "questionOptions",
          question: "18.Lựa chọn đáp án phù hợp với nội dung bên trái",
          answers: [
               { id: "18_a", value: "a", label: "Bên trái có gì" },
               { id: "18_b", value: "b", label: "Bên phải có gì" },
               { id: "18_c", value: "c", label: "Bên trên có gì" },
               { id: "18_d", value: "d", label: "Bên dưới có gì" },
          ],
          answerYes: [
               {
                    id: "18_a",
                    value: "a",
                    label: "Bên trái không có gì",
               },
               {
                    id: "18_b",
                    value: "b",
                    label: "Bên phải không có gì",
               },
               {
                    id: "18_c",
                    value: "c",
                    label: "Bên trên không có gì",
               },
               {
                    id: "18_d",
                    value: "d",
                    label: "Bên dưới không có gì",
               },
          ],
          yesAnswerYes: [
               {
                    id: "18_b",
                    value: "b",
                    label: "Bên phải không có gì",
               },
               {
                    id: "18_c",
                    value: "c",
                    label: "Bên trên không có gì",
               },
               {
                    id: "18_d",
                    value: "d",
                    label: "Bên dưới không có gì",
               },
               {
                    id: "18_a",
                    value: "a",
                    label: "Bên trái không có gì",
               },
          ],
     },
     {
          id: 19,
          type: "questionOptions",
          question: "19.Lựa chọn đáp án phù hợp với nội dung bên trái",
          answers: [
               { id: "19_a", value: "a", label: "Bên trái có gì" },
               { id: "19_b", value: "b", label: "Bên phải có gì" },
               { id: "19_c", value: "c", label: "Bên trên có gì" },
               { id: "19_d", value: "d", label: "Bên dưới có gì" },
          ],
          answerYes: [
               {
                    id: "19_a",
                    value: "a",
                    label: "Bên trái không có gì",
               },
               {
                    id: "19_b",
                    value: "b",
                    label: "Bên phải không có gì",
               },
               {
                    id: "19_c",
                    value: "c",
                    label: "Bên trên không có gì",
               },
               {
                    id: "19_d",
                    value: "d",
                    label: "Bên dưới không có gì",
               },
          ],
          yesAnswerYes: [
               {
                    id: "19_b",
                    value: "b",
                    label: "Bên phải không có gì",
               },
               {
                    id: "19_c",
                    value: "c",
                    label: "Bên trên không có gì",
               },
               {
                    id: "19_d",
                    value: "d",
                    label: "Bên dưới không có gì",
               },
               {
                    id: "19_a",
                    value: "a",
                    label: "Bên trái không có gì",
               },
          ],
     },
     {
          id: 20,
          type: "questionOptions",
          question: "20.Lựa chọn đáp án phù hợp với nội dung bên trái",
          answers: [
               { id: "20_a", value: "a", label: "Bên trái có gì" },
               { id: "20_b", value: "b", label: "Bên phải có gì" },
               { id: "20_c", value: "c", label: "Bên trên có gì" },
               { id: "20_d", value: "d", label: "Bên dưới có gì" },
          ],
          answerYes: [
               {
                    id: "20_a",
                    value: "a",
                    label: "Bên trái không có gì",
               },
               {
                    id: "20_b",
                    value: "b",
                    label: "Bên phải không có gì",
               },
               {
                    id: "20_c",
                    value: "c",
                    label: "Bên trên không có gì",
               },
               {
                    id: "20_d",
                    value: "d",
                    label: "Bên dưới không có gì",
               },
          ],
          yesAnswerYes: [
               {
                    id: "20_b",
                    value: "b",
                    label: "Bên phải không có gì",
               },
               {
                    id: "20_c",
                    value: "c",
                    label: "Bên trên không có gì",
               },
               {
                    id: "20_d",
                    value: "d",
                    label: "Bên dưới không có gì",
               },
               {
                    id: "20_a",
                    value: "a",
                    label: "Bên trái không có gì",
               },
          ],
     },
]
const questionText = [
     {
          id: 21,
          type: "questionText",
          question: "21.Số nhỏ nhất là bao nhiêu ?",
          answersYes: "1",
     },
     {
          id: 22,
          type: "questionText",
          question: "22.Số nhỏ nhất là bao nhiêu ?",
          answersYes: "1",
     },
     {
          id: 23,
          type: "questionText",
          question: "23.Số nhỏ nhất là bao nhiêu ?",
          answersYes: "1",
     },
     {
          id: 24,
          type: "questionText",
          question: "24.Số nhỏ nhất là bao nhiêu ?",
          answersYes: "1",
     },
     {
          id: 25,
          type: "questionText",
          question: "25.Số nhỏ nhất là bao nhiêu ?",
          answersYes: "1",
     },
]

export {
     questionData,
     questionDataCheckBox,
     questionDataButton,
     questionOptions,
     questionText,
}
