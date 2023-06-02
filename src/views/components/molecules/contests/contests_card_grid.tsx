import Grid from "@material-ui/core/Grid";
import CardWithDialog from "../../atoms/card_with_dialog";
import ImageLink from "../../atoms/image_link";

const cards = [
  {
    imageSrc: "src/assets/cathub_logo.png",
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
          image_source={"src/assets/github_logo.png"}
          image_altnative={"chathub_github"}
          image_width={40}
          image_height={40}
        />
        <ImageLink
          link_target={
            "https://www.figma.com/file/AB066ffbU9ZaoM8YAFmKna/ChatHub?node-id=51995%3A5326&t=vCDGDyJLM9Jwcpan-1"
          }
          image_source={"src/assets/figma_logo.png"}
          image_altnative={"chathub_figma"}
          image_width={40}
          image_height={40}
        />
        <ImageLink
          link_target={
            "https://drive.google.com/file/d/1vXHEch6AGc4khRD7W-x8Sf71bcri2c0Q/view?usp=share_link"
          }
          image_source={"src/assets/google_drive_logo.png"}
          image_altnative={"chathub_google_drive"}
          image_width={40}
          image_height={40}
        />
      </div>,
    ],
  },

  {
    imageSrc: "src/assets/r3koushien_report.png",
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
          image_source={"src/assets/link_logo.png"}
          image_altnative={"chathub_google_drive"}
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
