import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
//import AttachEmailIcon from "@mui/icons-material/AttachEmail";
//import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import BackupIcon from "@mui/icons-material/Backup";
import SettingsIcon from "@mui/icons-material/Settings";
import QueryStatsIcon from '@mui/icons-material/QueryStats';

//アイコンのインポートの仕方は下記から検索してコマンドがわかる
//https://mui.com/material-ui/material-icons/

export const SidebarData = [
    {
        title: "ホーム",
        icon: <HomeIcon />,
        link: "/",
      },
      {
        title: "画像⇒マニュアル",
        icon: <QueryStatsIcon />,
        link: "/page2",
      },
      {
        title: "マニュアルHTML化",
        icon: <QueryStatsIcon />,
        link: "/page3",
      },
      {
        title: "友達追加",
        icon: <PersonAddIcon />,
        link: "/friends",
      },
      {
        title: "お支払い設定",
        icon: <AddCardIcon />,
        link: "/payment",
      },
      {
        title: "アップロード",
        icon: <BackupIcon />,
        link: "/upload",
      },
      {
        title: "詳細設定",
        icon: <SettingsIcon />,
        link: "/rocket",
      },
]