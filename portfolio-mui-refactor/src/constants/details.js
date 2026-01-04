import {
    Coffee,
    SchoolRounded,
    DataObjectRounded,
    DomainVerificationRounded,
    Draw
} from "@mui/icons-material";

export const devWorkInfo = [
    {
        tooltipTitle: "تعداد قهوه های خورده شده",
        icon: <Coffee />,
        total: 4242,
        color: "lightcoral",
    },
    {
        tooltipTitle: "تعداد دوره های من",
        icon: <SchoolRounded />,
        total: 10,
        color: "lightskyblue",
    },
    {
        tooltipTitle: "تعداد پروژه های من",
        icon: <DataObjectRounded />,
        total: 20,
        color: "lightslategray",
    },
    {
        tooltipTitle: "تعداد پروژه های به پایان رسیده",
        icon: <DomainVerificationRounded />,
        total: 12,
        color: "lightseagreen",
    },
    {
        tooltipTitle: "تعداد مدل های ساخته شده",
        icon: <Draw />,
        total: 100,
        color: "teal",
    },
];
