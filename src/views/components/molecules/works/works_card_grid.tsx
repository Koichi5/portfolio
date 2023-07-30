import Grid from "@material-ui/core/Grid";
import CardWithDialog from "../../atoms/card_with_dialog";
import ImageLink from "../../atoms/image_link";

const cards = [
  {
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc9NqE87qGHvw3qNHeXrVd8AJlWQs4NuiRbvhFcPdx4Dh7msvEoAlzog0lyECoKOa9PJoPek9qUZK_DFpdoD12pJqUyRs8EbwVEC929DcbEZPVGgv7odbkVdi2Ecd8zsTEKo4F11DWzNiYw-LZLHbEtE=w500-h500-s-no?authuser=0",
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
          image_source={
            "https://lh3.googleusercontent.com/pw/AIL4fc9ULNJ10vBRXoTBM2hGcBivz80zhid7vrChx8yllEANsNR4gTZciRDYL26iWSNhe4ssqSlzIGAagPqXBup7dKdQPDd722zk_Mn7sg991XR7PtZd0PUrhF3Tmuyr52HwpYJFtmkuiFnwfZcXZot4ndpr=w512-h512-s-no?authuser=0"
          }
          image_altnative={"tech_journey_play_store"}
          image_width={40}
          image_height={40}
        />
        <ImageLink
          link_target={"https://github.com/Koichi5/quiz_app"}
          image_source={
            "https://lh3.googleusercontent.com/pw/AIL4fc9E5vZ_Zwihi3gcZfnfc6aL4IBrMMnWsFkFuaJZAfu6eEhoyojti01jZQtV5e9ecf9E73pNsYWDOMqkFiOEtq3dxrSfGnZTZCQ8-1-cLd__fR2Pwh8IMaHlP0PGSYlYGSCK03kzuc46Zz8TlSE0gbRa=w512-h512-s-no?authuser=0"
          }
          image_altnative={"tech_journey_github"}
          image_width={40}
          image_height={40}
        />
        <ImageLink
          link_target={
            "https://www.figma.com/file/6HaR5XPLUdNgQ6NQcTos8U/Tech-Journey?node-id=51496%3A4712&t=O1VrswTKHesiZAfC-1"
          }
          image_source={
            "https://lh3.googleusercontent.com/pw/AIL4fc9hCfzk7qFCGeIvgtP4gbjF4bXnqSs99YVhOCGiYnJD-fV2Y9LCtBg1Nwi8uHsSwZRN-1iAsvpm_iWAHsqJ6K-_d2iVxLoDtfWmD5E_7Jjp0lENf8YepKxUJDqeCxDEUQxlrpVlLId8m4aiQcPmg6RY=w512-h512-s-no?authuser=0"
          }
          image_altnative={"chathub_figma"}
          image_width={40}
          image_height={40}
        />
      </div>,
    ],
    fifthContent: [
        <iframe
          src="https://my.spline.design/untitled-72ecd9604b557f7fe4d8ba024ea61a53/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ zoom: "1.3" }}
        ></iframe>
    ],
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc-h_Fc8T3JZfh2S1PxCU1pc9sYwdV3VPqtjsyj_sz3g_iFGX384tBchi5Q7-dzktPS4xagoBUcmk-qrOE-F_qtznrV1af6G7EBfaFymXsqKa79qhPSIDSn72B-c-7PUfoRRCLO3aNFzxSRNoF1A80ytRQK5EswgpPtrMvYh1m6qmh5O3FuGPIsyQQiM0r4G8PlnuaE00G6h_qUO95L_plFnm3Vw4Mot_o6Q116F3i6werGY-Kd2RHakb-6Ga5fEsz0kYoDU7ZM5q4m7Iw4qzwjnVJV7SizUzaHh_R_GfF-E8mLMGw7F1GqDaVwKNEbPwa49mB7ZcKDFtD8wnVUq8jY32LWTbAmQF44E6Y8NwxwgVm5FP5mEjQ4DW8SMfSEe1cbplvOiTW-dvSQT62p1MSASI5l-ZhM4QCvw5QhyAWGT_Hf1h-h7hUYSg_lz3AAhgq9Em_2RF3r2lo3WVqmMr1pP2T5WwxYUrUbUHrG2AMs5hMt5qmbjg2USPuMUPTgtDkF--Y9HMf1Fc0I2GvrY_sHqH91T7avXN3ds5bgWeNz60cdk-RoUy8zcsfOuO8eqDFArvxdnx622ftDp0A3iOfePHTMcmM3tfE6YoInllcy4_g1bdSXXoTzKbbp9RHbixNSJngjth7TishZL2W3sumtn9XpvjWtrICo7oUzifSvSX__q0rWAYAkYkxlqPF7ahzyZ9NN5D1UIUSktXeavuJXDNyUqWVTQUaGAybv8UWOAvhJxMwfyXEnrTYkbUOggmUaEJLqDmROBp5WacWVSGkH_S_5MaBxyHua9b_fHf8mxr8yrBQNzw4YRY0pnZs2vtU_Oei3NW6vDFaQNN8m1-r-2LwgQ8UzL48r2VidNJD6fPNAWp9ds85Cybz7clAgE24dHtSgkGSevXR7ntvVGkIFNVjGUXDx1zJh1zDkia3OwCawPEzkEx4ajANAOSciQQyqq01ki0WLKQgPISIwjY4Zs0y8Wo3TZOUaVnnhviT2oXxSz7zi3e9KjA_1NuTLz=w500-h500-s-no?authuser=0",
    title: "買い物ナビ",
    attribute: "個人開発",
    firstContentTitle: "DETAIL",
    firstContent:
      "自分自身が一人暮らしで買い物をする際、よく買い忘れをするため、それを防ぐためのアプリを開発しました。",
    secondContentTitle: "POINT",
    secondContent:
      "Swift、SwiftUIとFirebaseを用い開発したアプリで、プッシュ通知の機能やECサイトのリンクをダイレクトに開く機能、Lottieを用いたアニメーションを実装しました。",
    thirdContentTitle: "TECH",
    thirdContent: "Swift,  SwiftUI,  Firebase",
    fourthContentTitle: "SOURCE",
    fourthContent: [
      <div style={{ alignItems: "center", display: "flex" }}>
        <ImageLink
          link_target={
            "https://apps.apple.com/jp/app/%E8%B2%B7%E3%81%84%E7%89%A9%E3%83%8A%E3%83%93/id6451027212"
          }
          image_source={
            "https://lh3.googleusercontent.com/pw/AIL4fc_hzznJtAAMsSYIUXRdipXz7A91ERl5IJcaQUOlY8k9Be-R_pu-OfrKo8gnSCvg3veT2qy6-W6SpfAyV1TOZfaajA_W8hn3cDwfKs58d_EwlMi2DpHc4gBUCjLTcC5pQ97g4CKADYpvqG_1TioIALwQR3ufNO6B1TqqFjUzYMfyDJAJKGQEx7W_kwKqErwN3wRh2wjD5FNzb35bbI7pJU54wp4O_edER-3gF0MuF79FUIb6S1NO5MeEHTgiKQskaAuMyy5mwKYHzdTKl8rD_vxjhO0pzTrg4pnU7xj7qNFiFPPHxYD-k0XSGXE3AxWKLL3A9dQUSRpRIfZnhgoFpSeH1TuSSDXhvLaE-gms-Ry-mJmjN9H0Nmn8cGOfbXeD-G6NHwtz5MSD66JpOuqSNWpRlYx3z_WkLf62siT1cOkcBwQSisEfKGWz5IF1ES76jEF9H7yOrOvXKg9BaUdHEZSQZtfhqKG2qMR7z_oOMKqTEKawBtaThSu-iZYRoPD6koz-gv6aSTBfDDqSyfov_I_Es3Hx8N_wCEuyYMIlpaOItZLwKoShEmiRIBFTTLv9qimopzx-8TaV0QqssIpqezmYurXkvZ1hhM4tDn-h-TdE6kbptgn-KBJor4vR4eJJMoIktoEfUSN1UNHoEQ6P6bxCyUvGzxr2huJThstJb2j2vGmadezaLeJvEzyte7BltJtSn7jIH5BYZw1lHXIw70eezsFTNG-c15nnG9Samd7oxRGxx3iYythcxM9q16N3gAtU5BCwwcBotFJYKMPUUs1Kl3QX11iYJuB2-dP9zG-xaiHvbUANxNxOjOiKy_ArIdnlMtM5uLuROzNrbuAeYppsr0-9OeiCaXIh3rBSU7q9OgYvcyVIvY5EIg54VEvnUJiAr91RdAclDKOEzQIje4gyRFqW-Ie3yZPGYLd1oS6Ebbcp-3WGeZ8bPNlsHft03L2-hgyk07V-3kLO-tLAkRuXgIElJdeyICm33KGTrvzYtWhKyaATRDut_7E8wcCl=w512-h512-s-no?authuser=0"
          }
          image_altnative={"shopping_navi_apple_store"}
          image_width={40}
          image_height={40}
        />
        <ImageLink
          link_target={"https://github.com/Koichi5/shopping_reminder"}
          image_source={
            "https://lh3.googleusercontent.com/pw/AIL4fc9E5vZ_Zwihi3gcZfnfc6aL4IBrMMnWsFkFuaJZAfu6eEhoyojti01jZQtV5e9ecf9E73pNsYWDOMqkFiOEtq3dxrSfGnZTZCQ8-1-cLd__fR2Pwh8IMaHlP0PGSYlYGSCK03kzuc46Zz8TlSE0gbRa=w512-h512-s-no?authuser=0"
          }
          image_altnative={"shopping_navi_github"}
          image_width={40}
          image_height={40}
        />
      </div>,
    ],
    fifthContent: [
<iframe src='https://my.spline.design/untitled-143116279a522dbb2957787c8f99bde3/' frameBorder='0' width='100%' height='100%'></iframe>]
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc_ZcRR5bjgk34v2DkIQTlswvkvoLQCG4wNH6u7VxIDg2WkMslNXpEjwE8ENHh72He2nTSniTZEf2VQFyAA8kl8LddTD4Vy-1v5iTOOYTWWmbemIdK2mVVypn61kpIK9FUHi0ERHn5L0VnEBqXvqEJ5z=w940-h788-s-no?authuser=0",
    title: "株式会社 Voteee Technologies",
    attribute: "インターン",
    firstContentTitle: "DETAIL",
    firstContent:
      "2022年2月から10月の8ヶ月間、株式会社 Voteee Technologiesにて、 Flutterコースのプログラミングスクール講師を務めました。",
    secondContentTitle: "POINT",
    secondContent:
      "Flutterコースの責任者兼講師として教材作成と講義を担当しました。　　　　「質問の来ないくらいわかりやすい教材」を目指して、自身のFlutter の学習と同時並行で教材作成を行うことで、徹底的に初学者に寄り添った内容にするよう心がけて作成しました。また、Qiita等を活用して外部への発信活動も積極的に行いました。この経験を通して私は、他の人に技術を教えることの難しさと発信活動の大切さを学びました。この経験を活かして、人を指導する立場に立った場合は相手の視点に立って考え、相手はが何が分からないのかを考えるよう心がけようと感じました。",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc-_806pvebSbxWLCDzb5Unl3bfke7nWYargwcisFkuWsLEGVYWfn3F34YhcThKnY56iv19cRfxi3Bow4kffapVqjkIGl9PawpGjd4eEiA-7bO27PN4xXWuzbHrlA-isYULS0WV9jglj9VSOrzf23zkw=w867-h739-s-no?authuser=0",
    title: "株式会社 Wanderlust",
    attribute: "インターン",
    firstContentTitle: "DETAIL",
    firstContent:
      "2023年2月から5月までの3ヶ月間モバイルアプリケーションエンジニアとして、Flutterを用いて、位置情報共有アプリLocketの開発に携わりました。",
    secondContentTitle: "POINT",
    secondContent:
      "主な業務内容としては、新機能の追加やバグ修正、UI修正などです。この経験を通して、非常にスピードの速い開発、ユーザーや競合他社の動向に応じて機能を変更する柔軟性のある開発、英語を用いた開発を経験することができました。",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc92rp_sz3SdziwfYnM1EzN23uw9uhiSmgW7OesmAahfbbOLMMcoJcwXWuhq-EKQTsG89jeJv2wzAB2KauynOmw8soJY94s68x2xY5rwPI_qF7tYLZm_o7QF0AIiGvE76bjLrXXuQme9KZhqzSOAbO9-=w940-h788-s-no?authuser=0",
    title: "株式会社 はんぽさき",
    attribute: "インターン",
    firstContentTitle: "DETAIL",
    firstContent:
      "2023年5月までのモバイルアプリケーションエンジニアとして、Flutterを用いて、地図アプリLivMapの開発に携っています。",
    secondContentTitle: "POINT",
    secondContent:
      "現在継続中のインターンであり、主な業務内容としては、新機能の追加やバグ修正、UI修正などです。",
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
