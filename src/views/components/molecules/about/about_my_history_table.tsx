import TableItem from "../../atoms/table_item";

const AboutMyHistoryTable = () => {
  return (
    <table
      style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    >
      <TableItem
        keyValue={"2021. 4"}
        Value={"関西大学入学"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2021. 11"}
        Value={"プログラミング（Web制作）を本格的に学習開始"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2021. 12"}
        Value={"ビジネスコンテスト「ミライノピッチ」で企業賞複数受賞"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2021. 12"}
        Value={"丸井グループ最年少アクセラレーター選出"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2022. 2 - 2022. 10"}
        Value={
          "株式会社Voteee Technologies にて Flutter のプログラミング講師としてインターンを経験"
        }
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2022. 3"}
        Value={"起業家甲子園近畿地方代表、企業賞複数受賞"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2022. 8 - 2023. 3"}
        Value={"関西大学の社会課題解決プログラム「山岡塾」に参加"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2023. 2"}
        Value={"関西ビギナーズハッカソンにて優良賞受賞"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2023. 2 - 2023. 4"}
        Value={
          "株式会社Wanderlust にて Flutter エンジニアとしてチーム開発を経験"
        }
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2023. 4"}
        Value={
          "Flutter を用いた個人開発で情報科目学習サポートアプリ「Tech Journey」を Google Play ストアへリリース"
        }
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2023. 5 -"}
        Value={
          "株式会社はんぽさき にて Flutter エンジニアとしてチーム開発を経験"
        }
        paddingBetween={200}
      />
      <TableItem
        keyValue={"2023. 7"}
        Value={
          "Swift を用いた個人開発で買い物サポートアプリ「買い物ナビ」を App Store へリリース"
        }
        paddingBetween={200}
      />
            <TableItem
        keyValue={"2023. 8"}
        Value={
          "株式会社 Sansan の 「Sansan Tech Internship SPARK2023」に参加しました。"
        }
        paddingBetween={200}
      />
            <TableItem
        keyValue={"2023. 10"}
        Value={
          "株式会社 リクルート のサマーインターンに参加しました。"
        }
        paddingBetween={200}
      />
    </table>
  );
};

export default AboutMyHistoryTable;
