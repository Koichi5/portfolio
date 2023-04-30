import React from "react";
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
    imageSrc: "src/assets/cathub_logo.png",
    title: "ChatHub",
    attribute: "ハッカソン",
    firstContentTitle: "DETAIL",
    firstContent: "2023年2月26日から28日にかけて行われた「関西ビギナーズハッカソン」において開発した課題解決プラットフォームアプリ",
    secondContentTitle: "POINT",
    secondContent: "テックリードとして要件定義、データベース設計、UI,UX設計、コーディングに加え、メンバーにFlutterの基礎からFirebase連携まで教えたり、機能ごとにメンバーに役割を割り振ったり、GitHubの使用方法を教えたりなどしました。",
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
];

function CardGrid() {
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

export default CardGrid;
