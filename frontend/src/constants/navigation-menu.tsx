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
        name: "Kelompok Nelayan",
        link: undefined,
        subMenu: [
          {
            name: "Daftar Kelompok Nelayan",
            link: "/daftar-kelompok-nelayan"
          },
          {
            "name": "Data Kelompok Nelayan",
            "link": "/data-kelompok-nelayan"
          }
        ],
      },
      {
        name: "Data Nelayan",
        link: undefined,
        subMenu: [
          {
            name: "Daftar Nelayan",
            link: "/daftar-nelayan"
          },
          {
            name: "Data Nelayan",
            link: "/data-nelayan"
          },
        ],
      },
    ],
  },
  {
    name: "Transaksi",
    link: "/transaksi",
    logo: <Icon width={20} icon='bx:bxs-cart' />,
    subMenu: [
      {
        name: "Cetak Surat Jalan",
        link: "/cetak-surat-jalan",
      },
      {
        name: "Input Transaksi",
        link: "/input-transaksi",
      }
    ],
  },
  {
    name: "Laporan",
    link: "/laporan",
    logo: <Icon width={20} icon='carbon:document-pdf' />,
    subMenu: [
      {
        name: "Laporan Transaksi",
        link: "/laporan-transaksi",
      },
      {
        name: "Laporan Nelayan",
        link: "/laporan-nelayan",
      }
    ],
  }
];