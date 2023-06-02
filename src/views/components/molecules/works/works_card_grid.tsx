import Grid from "@material-ui/core/Grid";
import CardWithDialog from "../../atoms/card_with_dialog";
import ImageLink from "../../atoms/image_link";

const cards = [
  {
    imageSrc: "src/assets/tech_journey_logo.png",
    title: "Tech Journey",
    attribute: "個人開発",
    firstContentTitle: "DETAIL",
    firstContent:
      "2025年から大学入学共通テストの必須科目に追加される「情報」に関する学習をサポートするためのクイズアプリ。自分自身がプログラミングについて学び、その楽しさに気づいたため、同じように情報やプログラミングについて面白さを感じる人を一人でも増やしたいと感じたため開発しました",
    secondContentTitle: "POINT",
    secondContent:
      "FlutterとFirebaseを用いて初めて開発したアプリで、クイズを解くだけでなく、ユーザーがクイズを作成したり、苦手な問題を記録して復習したりする機能を加えるのに苦労しました",
    thirdContentTitle: "TECH",
    thirdContent: "Dart,  Flutter,  Firebase",
    fourthContentTitle: "SOURCE",
    fourthContent: [
      <div style={{ alignItems: "center", display: "flex" }}>
        <ImageLink
          link_target={
            "https://play.google.com/store/apps/details?id=com.koichi.techjourney"
          }
          image_source={"src/assets/android_logo.png"}
          image_altnative={"tech_journey_play_store"}
          image_width={40}
          image_height={40}
        />
        <ImageLink
          link_target={"https://github.com/Koichi5/quiz_app"}
          image_source={"src/assets/github_logo.png"}
          image_altnative={"tech_journey_github"}
          image_width={40}
          image_height={40}
        />
        <ImageLink
          link_target={
            "https://www.figma.com/file/6HaR5XPLUdNgQ6NQcTos8U/Tech-Journey?node-id=51496%3A4712&t=O1VrswTKHesiZAfC-1"
          }
          image_source={"src/assets/figma_logo.png"}
          image_altnative={"chathub_figma"}
          image_width={40}
          image_height={40}
        />
      </div>,
    ],
  },
  {
    imageSrc: "src/assets/voteee_logo.png",
    title: "株式会社 Voteee Technologies",
    attribute: "インターン",
    firstContentTitle: "DETAIL",
    firstContent: "2022年2月から10月の8ヶ月間、株式会社 Voteee Technologiesにて、 Flutterコースのプログラミングスクール講師を務めました。",
    secondContentTitle: "POINT",
    secondContent: "Flutterコースの責任者兼講師として教材作成と講義を担当しました。　　　　「質問の来ないくらいわかりやすい教材」を目指して、自身のFlutter の学習と同時並行で教材作成を行うことで、徹底的に初学者に寄り添った内容にするよう心がけて作成しました。また、Qiita等を活用して外部への発信活動も積極的に行いました。この経験を通して私は、他の人に技術を教えることの難しさと発信活動の大切さを学びました。この経験を活かして、人を指導する立場に立った場合は相手の視点に立って考え、相手はが何が分からないのかを考えるよう心がけようと感じました。",
  },
  {
    imageSrc: "src/assets/locket_logo.jpg",
    title: "株式会社 Wanderlust",
    attribute: "インターン",
    firstContentTitle: "DETAIL",
    firstContent: "2023年2月から5月までの3ヶ月間モバイルアプリケーションエンジニアとして、Flutterを用いて、位置情報共有アプリLocketの開発に携わりました。",
    secondContentTitle: "POINT",
    secondContent: "主な業務内容としては、新機能の追加やバグ修正、UI修正などです。この経験を通して、非常にスピードの速い開発、ユーザーや競合他社の動向に応じて機能を変更する柔軟性のある開発、英語を用いた開発を経験することができました。",
  },
  {
    imageSrc: "src/assets/hanposaki_logo.png",
    title: "株式会社 はんぽさき",
    attribute: "インターン",
    firstContentTitle: "DETAIL",
    firstContent: "2023年5月までのモバイルアプリケーションエンジニアとして、Flutterを用いて、地図アプリLivMapの開発に携っています。",
    secondContentTitle: "POINT",
    secondContent: "現在継続中のインターンであり、主な業務内容としては、新機能の追加やバグ修正、UI修正などです。",
  },
];

function WorksCardGrid() {
  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <CardWithDialog {...card} />
        </Grid>
      ))}
    </Grid>
  );
}

export default WorksCardGrid;
