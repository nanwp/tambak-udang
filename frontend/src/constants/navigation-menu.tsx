import { Icon } from "@iconify/react/dist/iconify.js";

export const menu = [
  {
    name: "Dashboard",
    link: "/",
    subMenu: [],
    logo: <Icon width={20} icon="bxs:dashboard" />,
  },
  {
    name: "Nelayan",
    link: "/nelayan",
    logo: <Icon width={20} icon="bi:people-fill" />,
    subMenu: [
      {
        name: "Data Kelompok Nelayan",
        link: "/kelompok-nelayan"
      },
      {
        name: "Data Nelayan",
        link: "/nelayan"
      },
    ],
  },
  {
    name: "Transaksi",
    link: "/transaksi",
    logo: <Icon width={20} icon='bx:bxs-cart' />,
    subMenu: [
      {
        name: "Surat Jalan",
        link: "/surat-jalan",
      },
      {
        name: "Timbangan",
        link: "/timbangan",
      }
    ],
  },
  {
    name: "Laporan",
    link: "/laporan",
    logo: <Icon width={20} icon='carbon:document-pdf' />,
    subMenu: [
      {
        name: "Laporan Penangkapan",
        link: undefined,
        subMenu: [
          {
            name: "Laporan Penangkapan Harian",
            link: "/laporan-penangkapan-harian",
          },
          {
            name: "Laporan Penangkapan Bulanan",
            link: "/laporan-penangkapan-bulanan",
          },
        ]
      },
      {
        name: "Laporan Ekspor",
        link: "/laporan-ekspor",
      }
    ],
  }
];