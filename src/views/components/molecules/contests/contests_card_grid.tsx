import Grid from "@material-ui/core/Grid";
import CardWithDialog from "../../atoms/card_with_dialog";
import ImageLink from "../../atoms/image_link";

const cards = [
  {
    imageSrc: "https://lh3.googleusercontent.com/pw/AIL4fc8Ec79zgvgci1F14I9M8W5o1Kx41vqfJORKf2RQi35ycZwRDbsBFMIT3cRH3f2C74sBpjdOnq5c_D_xxD4UFPtNsMwmLTSZ2y0_ZRdaOoY0XPlFIGqF5HoCEAJkZlBe5OQXWhNQ2ptUO66ER9MlPTU0=w500-h500-s-no?authuser=0",
    title: "ChatHub",
    attribute: "ハッカソン",
    firstContentTitle: "DETAIL",
    firstContent:
      "2023年2月26日から28日にかけて行われた「関西ビギナーズハッカソン」において開発した課題解決プラットフォームアプリ",
    secondContentTitle: "POINT",
    secondContent:
      "テックリードとして要件定義、データベース設計、UI,UX設計、コーディングに加え、メンバーにFlutterの基礎からFirebase連携まで教えたり、機能ごとにメンバーに役割を割り振ったり、GitHubの使用方法を教えたりなどしました。",
    thirdContentTitle: "TECH",
    thirdContent: "Dart, Flutter, Firebase",
    fourthContentTitle: "SOURCE",
    fourthContent: [
      <div style={{ alignItems: "center", display: "flex" }}>
        <ImageLink
          link_target={"https://github.com/SyuMurase/Cathub"}
          image_source={"https://lh3.googleusercontent.com/pw/AIL4fc9E5vZ_Zwihi3gcZfnfc6aL4IBrMMnWsFkFuaJZAfu6eEhoyojti01jZQtV5e9ecf9E73pNsYWDOMqkFiOEtq3dxrSfGnZTZCQ8-1-cLd__fR2Pwh8IMaHlP0PGSYlYGSCK03kzuc46Zz8TlSE0gbRa=w512-h512-s-no?authuser=0"}
          image_altnative={"chathub_github"}
          image_width={40}
          image_height={40}
        />
        <ImageLink
          link_target={
            "https://www.figma.com/file/AB066ffbU9ZaoM8YAFmKna/ChatHub?node-id=51995%3A5326&t=vCDGDyJLM9Jwcpan-1"
          }
          image_source={"https://lh3.googleusercontent.com/pw/AIL4fc9hCfzk7qFCGeIvgtP4gbjF4bXnqSs99YVhOCGiYnJD-fV2Y9LCtBg1Nwi8uHsSwZRN-1iAsvpm_iWAHsqJ6K-_d2iVxLoDtfWmD5E_7Jjp0lENf8YepKxUJDqeCxDEUQxlrpVlLId8m4aiQcPmg6RY=w512-h512-s-no?authuser=0"}
          image_altnative={"chathub_figma"}
          image_width={40}
          image_height={40}
        />
        <ImageLink
          link_target={
            "https://drive.google.com/file/d/1vXHEch6AGc4khRD7W-x8Sf71bcri2c0Q/view?usp=share_link"
          }
          image_source={"https://lh3.googleusercontent.com/pw/AIL4fc8Dmz4ogK2nWyfyO10CXNl7e-5EtKSDC2VvoRCu8YOeu0NM4nf_8A2Tezu3F8lilFLEyA6KBd_H0kYNG9aLmLO9dsgBi5SEtzQBhl6Yd5kDAuFwj4Nk7n92sebBzRh0cmpLVbKSCKPpGVlxrY_Yqcq2=w225-h225-s-no?authuser=0"}
          image_altnative={"chathub_google_drive"}
          image_width={40}
          image_height={40}
        />
      </div>,
    ],
  },

  {
    imageSrc: "https://lh3.googleusercontent.com/pw/AIL4fc8-7E-PfjVUDteYcLzYwSdv_5uEn9GmEctWmj5O92h9s09CBqE7-raN0zLEBHypOlxHyLvqndFSMWN0bOXiM_nk5_zeVwC6X9LjA_6zY3ttTuy1qnnlUDXSM2P8e7w8OIQeRH7gNEEL5xPPcqAT6BfU=w940-h788-s-no?authuser=0",
    title: "起業家甲子園",
    attribute: "ビジネスコンテスト",
    firstContentTitle: "DETAIL",
    firstContent:
      "2022年3月8日に行われた「令和3年度 起業家甲子園」にて近畿地方代表として出場し、「IBM BlueHub賞」「ABCドリームベンチャーズ賞」「 Z Venture Capital賞」をいただきました。",
    secondContentTitle: "POINT",
    secondContent:
      "この経験を通じてプロダクトを企画から開発まで行うことで、通常の開発ではできない経験ができました。アプリ設計能力に関しては、ユーザーのターゲットのペルソナを可能な限り正確に思い浮かべるだけでなく、ターゲットが使用する時間、場所、使用する時の心境まで考えて設計することで、よりユーザーに受け入れられやすいアプリを設計することができると考えました。デザイン能力に関しては、アプリを打ち出す際にそのターゲットの使用するSNSを分析したり、ターゲットに適したデザインかどうかを考えることで効果的にユーザーにアプローチして、より多くのユーザーにサービスを使用してもらえるようになると考えました。営業能力に関しては、自身のサービスが最も打ち出すべきポイントは何かを徹底的に考えることで、そのサービスを本当に必要としているターゲットを考えることができ、結果的に正確なペルソナ設計につながり、必要としているターゲットに正確にサービスを届けられるようになると考えました。",
    fourthContentTitle: "SOURCE",
    fourthContent: [
      <div style={{ alignItems: "center", display: "flex" }}>
        <ImageLink
          link_target={
            "https://kutc-my.sharepoint.com/:p:/g/personal/k020916_kansai-u_ac_jp/EVG1X91_NWFIoYKmlei_aG4BNBu1R3ybH6z31a3IiI12Wg?e=5sGtRP"
          }
          image_source={"src/assets/google_drive_logo.png"}
          image_altnative={"chathub_google_drive"}
          image_width={40}
          image_height={40}
        />
        <ImageLink
          link_target={
            "https://previewer.adalo.com/163bd807-8145-4710-8247-86e4221a3b74"
          }
          image_source={"https://lh3.googleusercontent.com/pw/AIL4fc8ueIbkEmUpFM-XE0GJ_2G33criPWs6DvDuxmkces05idEVnyaQMRkfdlEzwBMow7UP0_QVgq99bvomxHFnU-yXq7Fi_yr1yKuJpi_aVkP3fOArF_snkBNrPblhYIBpKOlaZrI6Fa_q6tsJXMSEmymO=w512-h512-s-no?authuser=0"}
          image_altnative={"chathub_link"}
          image_width={40}
          image_height={40}
        />
      </div>,
    ],
  },
];

function ContestsCardGrid() {
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

export default ContestsCardGrid;
