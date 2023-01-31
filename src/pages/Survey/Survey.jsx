import React, { useState, memo, useEffect, useReducer } from "react";

import { images } from "../../constants";
import { HeaderOnly } from "../../Layout";
import "../../css/bootstrap.min.css";
import "./Survey.scss";

const hollands = [
  {
    image: images.realistic,
    content1:
      "Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…",
    content2:
      "Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.",
  },
  {
    image: images.investigative,
    content1:
      "Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…",
    content2:
      "Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.",
  },
  {
    image: images.artistic,
    content1:
      "Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…",
    content2:
      "Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.",
  },
  {
    image: images.social,
    content1:
      "Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…",
    content2:
      "Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.",
  },
  {
    image: images.enterprising,
    content1:
      "Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…",
    content2:
      "Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.",
  },
  {
    image: images.conventional,
    content1:
      "Người thuộc nhóm Holland Kỹ thuật – Realistic thường thực tế, ưa hành động hơn suy nghĩ, thích khám phá, thao tác một cách trật tự và có hệ thống, thích làm việc với những vật cụ thể như máy móc, công cụ dụng cụ, con vật,…",
    content2:
      "Người thuộc nhóm Kỹ thuật thường được mô tả là những người trung thực, thẳng thắn và kiên trì trong công việc. Họ yêu thích các hoạt động yêu cầu sự vận động của cơ thể và các kỹ năng yêu cầu sức mạnh, thể lực. Họ tỉ mỉ trong các thao tác, cẩn thận với từng chi tiết nhỏ. Họ thiên về những công việc thực tế, rõ ràng, yêu cầu ra kết quả hoặc thành phẩm cụ thể hơn là suy nghĩ, tìm ra ý tưởng. Họ thích giải quyết vấn đề theo hướng đưa ra cách giải pháp mang tính ứng dụng cao hơn là tư duy trừu tượng. Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.",
  },
];
const questions = [
  {
    id: 1,
    answers: [
      {
        id: 1,
        answer_content: "Có tính tự lập",
        career_category: 1,
        question: 1,
      },
      {
        id: 10,
        answer_content: "Thích tìm hiểu, khám phá vấn đề mới",
        career_category: 2,
        question: 1,
      },
      {
        id: 19,
        answer_content: "Dễ xúc động",
        career_category: 3,
        question: 1,
      },
      {
        id: 28,
        answer_content: "Thân thiện, hay giúp đỡ người khác",
        career_category: 4,
        question: 1,
      },
      {
        id: 37,
        answer_content: "Thích phiêu lưu",
        career_category: 5,
        question: 1,
      },
      {
        id: 46,
        answer_content: "Có đầu óc tổ chức, sắp xếp, ngăn nắp",
        career_category: 6,
        question: 1,
      },
    ],
    question_content: "Chọn phương án đúng với bạn nhất?",
    is_active: true,
  },
];

const totalQuestions = 9;

function Survey() {

  const [toggleSurvey, setToggleSurvey] = useState(false);
  const [question, setQuestion] = useState(questions[0]);
  const [idQuestion, setIdQuestion] = useState(1);

  const handleChange = () => {
    return 1;
  };
  const handlePrevBtn = () => {
    setIdQuestion(prev => prev - 1);
  }
  const handleNextBtn = () => {
    setIdQuestion(prev => prev + 1);
  }
  const handleResultBtn = () => {
    return 1;
  }

  return toggleSurvey ? (
    <HeaderOnly>
      <div id="survey">
        <div className="container">
          <div className="row no-gutters justify-content-center align-items-center main__content">
            <div className="col col-12 col-sm-12 col-lg-8 col-xl-8">
              <div className="question__item">
                <p className="question__item-title">
                  {question.question_content}
                </p>
                {question.answers.map((itemAnswer, index) => (
                  <label className="question__item-choice" htmlFor={index} key={index}>
                    <input
                      id={index}
                      type="checkbox"
                      name="answer"
                      onChange={handleChange}
                    />
                    {itemAnswer.answer_content}
                  </label>
                ))}
                {idQuestion === 1 ? (
                  <div className="question__item-controller">
                    <button
                      onClick={handleNextBtn}
                      className="controller-next"
                    >
                      Câu tiếp theo
                    </button>
                  </div>
                ) : idQuestion === totalQuestions ? (
                  <div className="question__item-controller">
                    <button
                      onClick={handlePrevBtn}
                      className="controller-prev"
                    >
                      Câu trước
                    </button>
                    <button 
                      onClick={handleResultBtn} 
                      className="controller-submit"
                    >
                      Nộp đáp án
                    </button>
                  </div>
                ) : (
                  <div className="question__item-controller">
                    <button
                      onClick={handlePrevBtn}
                      className="controller-prev"
                    >
                      Câu trước
                    </button>
                    <button
                      onClick={handleNextBtn}
                      className="controller-next"
                    >
                      Câu tiếp theo
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderOnly>
  ) : (
    <HeaderOnly>
      <div id="survey">
        <div className="container">
          <div className="row no-gutters justify-content-center align-items-center main__content">
            <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
              <div className="survey__image">
                <img src={images.holland} />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="survey__content">
                <p>
                  Trắc nghiệm Holland chính là cơ sở để bạn đối chiếu sở thích,
                  năng lực tự nhiên của mình với yêu cầu của các nhóm ngành
                  nghề. Từ đó bạn có thể định hướng nghề nghiệp theo nhóm ngành
                  phù hợp nhất. Kết quả Bài trắc nghiệm định hướng nghề nghiệp
                  giúp bạn tìm ra ba kiểu tính cách của bạn tương ứng với 3 mật
                  mã Holland (ví dụ: RCE hoặc ECR ). Sau đó dùng mã này kết nối
                  với những nghề nghiệp cụ thể. Hãy thả lỏng tâm trí và thực
                  hiện khảo sát một cách thoải mái nhất.
                </p>
                <button
                  onClick={() => setToggleSurvey(true)}
                  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                >
                  Bắt đầu ngay!
                </button>
              </div>
            </div>
          </div>
          {hollands.map((item, index) => (
            <div className="row no-gutters justify-content-center align-items-center explain">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="explain__item">
                  <img src={item.image} />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <div className="explain__item">
                  <p>{item.content1}</p>
                  <p>
                    <b>Đặc điểm tính cách: </b>
                    {item.content2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HeaderOnly>
  );
}

export default memo(Survey);
