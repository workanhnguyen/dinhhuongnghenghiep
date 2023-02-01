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
      "Người có sở thích nổi trội ở nhóm Holland Nghiên cứu thường thích phân tích, nghiên cứu sâu mọi vấn đề để tìm ra nguồn gốc, nguyên nhân của chúng. Họ cũng hay tò mò, thích quan sát, học hỏi, điều tra, đánh giá và giải quyết các vấn đề.",
    content2:
      "Người thuộc nhóm Nghiên cứu là những người thường xuyên đặt câu hỏi để truy vấn thấu đáo nguồn gốc, nguyên nhân của mọi vấn đề. Họ thích làm việc với ý tưởng hoặc dữ liệu để sáng tạo nên những giải pháp mới. Họ là những người có khả năng quan sát, phân tích, đánh giá vấn đề một cách logic và có hệ thống. Họ có khả năng làm việc độc lập tốt, thích các hoạt động cá nhân hoặc làm việc trong nhóm nhỏ hơn những hoạt động cần sự tham gia của nhiều người. Bạn bè, người xung quanh thường đánh giá họ là từ điển bách khoa “sống”.",
  },
  {
    image: images.artistic,
    content1:
      "Người thuộc nhóm Holland Nghệ thuật thường có trí tưởng tượng phong phú, trực giác mạnh và khả năng sáng tạo tốt. Họ yêu thích cái đẹp và dễ bị hấp dẫn bởi chúng. Đặc tính của người thuộc nhóm này là tự do, không có thiện cảm với những nguyên tắc, các công việc rõ ràng, hệ thống hóa.",
    content2:
      "Người thuộc nhóm Nghệ thuật thích sự tự do trong mọi chuyện. Họ không thể chịu đựng được sự gò ép hay phải theo khuôn khổ. Họ có trí tưởng tượng khá phong phú, có trực giác mạnh, và có khả năng sáng tạo. Họ yêu thích cái đẹp và dễ bị hấp dẫn bởi cái đẹp (thiên nhiên, con người, đồ vật,...). Họ có một hay nhiều khả năng trong nhóm sau: khiếu thẩm mỹ, ăn mặc đẹp, phối màu, vẽ, viết, nhảy, hát, chụp hình, quay phim, chơi một nhạc cụ, thẩm âm,... Họ không thích giống người khác và luôn thích làm sao để mình khác người xung quanh",
  },
  {
    image: images.social,
    content1:
      "Nhóm Holland Xã hội là sở thích của những bạn thích làm việc và tương tác với người khác bao gồm những công việc thường xuyên tiếp xúc và giao tiếp với xã hội như giao tiếp, huấn luyện, chữa lành, thiện nguyện, công tác xã hội,… Nhóm này thường có thiện cảm với các công việc rõ ràng, có hệ thống liên quan đến vật liệu, công cụ hoặc máy móc.",
    content2:
      "Nhóm Holland Xã hội là những người thích làm giao tiếp, làm việc với người khác, thích được đi đây, đi đó. Họ thường là người kết nối các thành viên trong nhóm và được nhiều người tìm đến để chia sẻ những vấn đề của mình. Họ hứng thú với những hoạt động có thể giúp đỡ những người xung quanh, đề cao tinh thần tự nguyện phục vụ cộng đồng. Người khác thường nghĩ đến họ như những người tốt bụng, hòa đồng, thân thiện và ấm áp.",
  },
  {
    image: images.enterprising,
    content1:
      "Người thuộc nhóm Holland Quản lý thường yêu thích các hoạt động đòi hỏi sự lãnh đạo, thuyết phục, tác động vào người khác để đạt được mục đích chung của tổ chức hoặc lợi ích kinh tế. Nhóm này thường ưu tiên những công việc bao quát, những cải tiến, đổi mới mà không thích làm việc một cách máy móc, tượng trưng.",
    content2:
      "Người thuộc nhóm Quản lý có sở thích và năng lực làm việc với một nhóm và lãnh đạo nhóm đó đạt được mục tiêu chung. Họ có tài ăn nói và khả năng đàm phán, thuyết phục người khác. Họ sở hữu tư duy sáng tạo và óc sắp xếp, tổ chức tốt. Họ được đánh giá là những người tự tin, bản lĩnh, dám nghĩ, dám làm. Họ cũng dễ gần, năng động, lạc quan và có khả năng lắng nghe, động viên và khích lệ người khác.",
  },
  {
    image: images.conventional,
    content1:
      "Người có sở thích nổi trội ở nhóm Holland Nghiệp vụ thường thích làm việc với con số và dữ liệu, công việc hành chánh văn phòng và những công việc được phân công cụ thể, rõ ràng. Nhóm này đặc biệt yêu thích xử lý dữ liệu, tài liệu một cách có trật tự và hệ thống hóa, không có thiện cảm với những hoạt động mơ hồ, tự do.",
    content2:
      "Người thuộc nhóm Holland Nghiệp vụ có sở thích và khả năng các công việc thiên về văn phòng như văn thư, hành chánh, tài vụ,... Họ có xu hướng thích làm việc với dữ liệu, con số, văn bản và giấy tờ. Họ suy nghĩ thực tế, chăm chỉ, cẩn thận và kiên nhẫn trong công việc. Họ cảm thấy thoải mái với các luật lệ, quy định và các công việc mang tính chất ổn định trong những môi trường được tổ chức chặt chẽ, khuôn mẫu.",
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
  {
    id: 2,
    answers: [
      {
        id: 2,
        answer_content: "Có đầu óc suy nghĩ thực tế",
        career_category: 1,
        question: 2,
      },
      {
        id: 11,
        answer_content: "Có khả năng phân tích vấn đề",
        career_category: 2,
        question: 2,
      },
      {
        id: 20,
        answer_content: "Giàu trí tưởng tượng",
        career_category: 3,
        question: 2,
      },
      {
        id: 29,
        answer_content: "Thích gặp gỡ, làm việc với nhiều người",
        career_category: 4,
        question: 2,
      },
      {
        id: 38,
        answer_content: "Có tính quyết đoán",
        career_category: 5,
        question: 2,
      },
      {
        id: 47,
        answer_content: "Cẩn thận, tỉ mỉ",
        career_category: 6,
        question: 2,
      },
    ],
    question_content: "Chọn phương án đúng với bạn nhất?",
    is_active: true,
  },
];
const INIT_SURVEY = 'INIT_SURVEY';
const DO_SURVEY = 'DO_SURVEY';
const RESULT_SURVEY = 'RESULT_SURVEY';

const totalQuestions = questions.length;

function Survey() {
  const [toggleSurvey, setToggleSurvey] = useState(INIT_SURVEY);
  const [question, setQuestion] = useState(questions[0]);
  const [indexQuestion, setIndexQuestion] = useState(0);

  const handleChange = () => {
    return 1;
  };
  const handlePrevBtn = () => {
    setIndexQuestion((prev) => prev - 1);
  };
  const handleNextBtn = () => {
    setIndexQuestion((prev) => prev + 1);
  };
  const handleResultBtn = () => {
    setToggleSurvey(RESULT_SURVEY);
  };

  useEffect(() => {
    setQuestion(questions[indexQuestion])
  }, [indexQuestion]);

  switch(toggleSurvey) {
    case INIT_SURVEY:
      return (
        <HeaderOnly>
          <div id="survey">
            <div className="container">
              <div className="row no-gutters justify-content-center align-items-center init">
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
                      onClick={() => setToggleSurvey(DO_SURVEY)}
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
    case DO_SURVEY:
      return (
        <HeaderOnly>
          <div id="survey">
            <div className="container">
              <div className="row no-gutters justify-content-center align-items-center question">
                <div className="col col-12 col-sm-12 col-lg-8 col-xl-8">
                  <div className="question__item">
                    <p className="question__item-title">
                      {question.question_content}
                    </p>
                    {question.answers.map((itemAnswer, index) => (
                      <label
                        className="question__item-choice"
                        htmlFor={index}
                        key={index}
                      >
                        <input
                          id={index}
                          type="checkbox"
                          name="answer"
                          onChange={handleChange}
                        />
                        {itemAnswer.answer_content}
                      </label>
                    ))}
                    {indexQuestion === 0 ? (
                      <div className="question__item-controller">
                        <button onClick={handleNextBtn} className="controller-next">
                          Câu tiếp theo
                        </button>
                      </div>
                    ) : indexQuestion === totalQuestions - 1 ? (
                      <div className="question__item-controller">
                        <button onClick={handlePrevBtn} className="controller-prev">
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
                        <button onClick={handlePrevBtn} className="controller-prev">
                          Câu trước
                        </button>
                        <button onClick={handleNextBtn} className="controller-next">
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
      )
    case RESULT_SURVEY:
      return (
        <HeaderOnly>
          <div id="survey">
            <div className="container">
              <div className="row no-gutters justify-content-center align-items-center result">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <h1 className="result__title">KẾT QUẢ CỦA BẠN LÀ:</h1>
                </div>
              </div>
              <div className="row no-gutters justify-content-center align-items-center result">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  <img className="result__image" src={images.enterprising} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                  <p className="result__content">
                    {hollands[0].content1}<br/><br/>
                    <b>Đặc điểm tính cách: </b>{hollands[0].content2}<br/><br/>
                    <b>Nghề nghiệp phù hợp: </b>Nghề nghiệp ở đây....
                  </p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                  <button onClick={() => setToggleSurvey(INIT_SURVEY)} className="result__btn-back">Trở về</button>
                </div>
              </div>
            </div>
          </div>
        </HeaderOnly>
      )
  };
}

export default memo(Survey);
