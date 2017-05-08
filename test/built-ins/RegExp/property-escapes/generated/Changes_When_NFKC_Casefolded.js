// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Changes_When_NFKC_Casefolded`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000A0,
    0x0000A8,
    0x0000AA,
    0x0000AD,
    0x0000AF,
    0x000100,
    0x000102,
    0x000104,
    0x000106,
    0x000108,
    0x00010A,
    0x00010C,
    0x00010E,
    0x000110,
    0x000112,
    0x000114,
    0x000116,
    0x000118,
    0x00011A,
    0x00011C,
    0x00011E,
    0x000120,
    0x000122,
    0x000124,
    0x000126,
    0x000128,
    0x00012A,
    0x00012C,
    0x00012E,
    0x000130,
    0x000136,
    0x000139,
    0x00013B,
    0x00013D,
    0x000143,
    0x000145,
    0x000147,
    0x00014C,
    0x00014E,
    0x000150,
    0x000152,
    0x000154,
    0x000156,
    0x000158,
    0x00015A,
    0x00015C,
    0x00015E,
    0x000160,
    0x000162,
    0x000164,
    0x000166,
    0x000168,
    0x00016A,
    0x00016C,
    0x00016E,
    0x000170,
    0x000172,
    0x000174,
    0x000176,
    0x00017B,
    0x00017D,
    0x00017F,
    0x000184,
    0x0001A2,
    0x0001A4,
    0x0001A9,
    0x0001AC,
    0x0001B5,
    0x0001BC,
    0x0001CF,
    0x0001D1,
    0x0001D3,
    0x0001D5,
    0x0001D7,
    0x0001D9,
    0x0001DB,
    0x0001DE,
    0x0001E0,
    0x0001E2,
    0x0001E4,
    0x0001E6,
    0x0001E8,
    0x0001EA,
    0x0001EC,
    0x0001EE,
    0x0001FA,
    0x0001FC,
    0x0001FE,
    0x000200,
    0x000202,
    0x000204,
    0x000206,
    0x000208,
    0x00020A,
    0x00020C,
    0x00020E,
    0x000210,
    0x000212,
    0x000214,
    0x000216,
    0x000218,
    0x00021A,
    0x00021C,
    0x00021E,
    0x000220,
    0x000222,
    0x000224,
    0x000226,
    0x000228,
    0x00022A,
    0x00022C,
    0x00022E,
    0x000230,
    0x000232,
    0x000241,
    0x000248,
    0x00024A,
    0x00024C,
    0x00024E,
    0x00034F,
    0x000370,
    0x000372,
    0x000374,
    0x000376,
    0x00037A,
    0x00038C,
    0x0003C2,
    0x0003D8,
    0x0003DA,
    0x0003DC,
    0x0003DE,
    0x0003E0,
    0x0003E2,
    0x0003E4,
    0x0003E6,
    0x0003E8,
    0x0003EA,
    0x0003EC,
    0x0003EE,
    0x0003F7,
    0x000460,
    0x000462,
    0x000464,
    0x000466,
    0x000468,
    0x00046A,
    0x00046C,
    0x00046E,
    0x000470,
    0x000472,
    0x000474,
    0x000476,
    0x000478,
    0x00047A,
    0x00047C,
    0x00047E,
    0x000480,
    0x00048A,
    0x00048C,
    0x00048E,
    0x000490,
    0x000492,
    0x000494,
    0x000496,
    0x000498,
    0x00049A,
    0x00049C,
    0x00049E,
    0x0004A0,
    0x0004A2,
    0x0004A4,
    0x0004A6,
    0x0004A8,
    0x0004AA,
    0x0004AC,
    0x0004AE,
    0x0004B0,
    0x0004B2,
    0x0004B4,
    0x0004B6,
    0x0004B8,
    0x0004BA,
    0x0004BC,
    0x0004BE,
    0x0004C3,
    0x0004C5,
    0x0004C7,
    0x0004C9,
    0x0004CB,
    0x0004CD,
    0x0004D0,
    0x0004D2,
    0x0004D4,
    0x0004D6,
    0x0004D8,
    0x0004DA,
    0x0004DC,
    0x0004DE,
    0x0004E0,
    0x0004E2,
    0x0004E4,
    0x0004E6,
    0x0004E8,
    0x0004EA,
    0x0004EC,
    0x0004EE,
    0x0004F0,
    0x0004F2,
    0x0004F4,
    0x0004F6,
    0x0004F8,
    0x0004FA,
    0x0004FC,
    0x0004FE,
    0x000500,
    0x000502,
    0x000504,
    0x000506,
    0x000508,
    0x00050A,
    0x00050C,
    0x00050E,
    0x000510,
    0x000512,
    0x000514,
    0x000516,
    0x000518,
    0x00051A,
    0x00051C,
    0x00051E,
    0x000520,
    0x000522,
    0x000524,
    0x000526,
    0x000528,
    0x00052A,
    0x00052C,
    0x00052E,
    0x000587,
    0x00061C,
    0x0009DF,
    0x000A33,
    0x000A36,
    0x000A5E,
    0x000E33,
    0x000EB3,
    0x000F0C,
    0x000F43,
    0x000F4D,
    0x000F52,
    0x000F57,
    0x000F5C,
    0x000F69,
    0x000F73,
    0x000F81,
    0x000F93,
    0x000F9D,
    0x000FA2,
    0x000FA7,
    0x000FAC,
    0x000FB9,
    0x0010C7,
    0x0010CD,
    0x0010FC,
    0x001D78,
    0x001E00,
    0x001E02,
    0x001E04,
    0x001E06,
    0x001E08,
    0x001E0A,
    0x001E0C,
    0x001E0E,
    0x001E10,
    0x001E12,
    0x001E14,
    0x001E16,
    0x001E18,
    0x001E1A,
    0x001E1C,
    0x001E1E,
    0x001E20,
    0x001E22,
    0x001E24,
    0x001E26,
    0x001E28,
    0x001E2A,
    0x001E2C,
    0x001E2E,
    0x001E30,
    0x001E32,
    0x001E34,
    0x001E36,
    0x001E38,
    0x001E3A,
    0x001E3C,
    0x001E3E,
    0x001E40,
    0x001E42,
    0x001E44,
    0x001E46,
    0x001E48,
    0x001E4A,
    0x001E4C,
    0x001E4E,
    0x001E50,
    0x001E52,
    0x001E54,
    0x001E56,
    0x001E58,
    0x001E5A,
    0x001E5C,
    0x001E5E,
    0x001E60,
    0x001E62,
    0x001E64,
    0x001E66,
    0x001E68,
    0x001E6A,
    0x001E6C,
    0x001E6E,
    0x001E70,
    0x001E72,
    0x001E74,
    0x001E76,
    0x001E78,
    0x001E7A,
    0x001E7C,
    0x001E7E,
    0x001E80,
    0x001E82,
    0x001E84,
    0x001E86,
    0x001E88,
    0x001E8A,
    0x001E8C,
    0x001E8E,
    0x001E90,
    0x001E92,
    0x001E94,
    0x001E9E,
    0x001EA0,
    0x001EA2,
    0x001EA4,
    0x001EA6,
    0x001EA8,
    0x001EAA,
    0x001EAC,
    0x001EAE,
    0x001EB0,
    0x001EB2,
    0x001EB4,
    0x001EB6,
    0x001EB8,
    0x001EBA,
    0x001EBC,
    0x001EBE,
    0x001EC0,
    0x001EC2,
    0x001EC4,
    0x001EC6,
    0x001EC8,
    0x001ECA,
    0x001ECC,
    0x001ECE,
    0x001ED0,
    0x001ED2,
    0x001ED4,
    0x001ED6,
    0x001ED8,
    0x001EDA,
    0x001EDC,
    0x001EDE,
    0x001EE0,
    0x001EE2,
    0x001EE4,
    0x001EE6,
    0x001EE8,
    0x001EEA,
    0x001EEC,
    0x001EEE,
    0x001EF0,
    0x001EF2,
    0x001EF4,
    0x001EF6,
    0x001EF8,
    0x001EFA,
    0x001EFC,
    0x001EFE,
    0x001F59,
    0x001F5B,
    0x001F5D,
    0x001F5F,
    0x001F71,
    0x001F73,
    0x001F75,
    0x001F77,
    0x001F79,
    0x001F7B,
    0x001F7D,
    0x001FD3,
    0x001FE3,
    0x002011,
    0x002017,
    0x00203C,
    0x00203E,
    0x002057,
    0x0020A8,
    0x002124,
    0x002126,
    0x002128,
    0x002183,
    0x002189,
    0x002A0C,
    0x002ADC,
    0x002C60,
    0x002C67,
    0x002C69,
    0x002C6B,
    0x002C72,
    0x002C75,
    0x002C82,
    0x002C84,
    0x002C86,
    0x002C88,
    0x002C8A,
    0x002C8C,
    0x002C8E,
    0x002C90,
    0x002C92,
    0x002C94,
    0x002C96,
    0x002C98,
    0x002C9A,
    0x002C9C,
    0x002C9E,
    0x002CA0,
    0x002CA2,
    0x002CA4,
    0x002CA6,
    0x002CA8,
    0x002CAA,
    0x002CAC,
    0x002CAE,
    0x002CB0,
    0x002CB2,
    0x002CB4,
    0x002CB6,
    0x002CB8,
    0x002CBA,
    0x002CBC,
    0x002CBE,
    0x002CC0,
    0x002CC2,
    0x002CC4,
    0x002CC6,
    0x002CC8,
    0x002CCA,
    0x002CCC,
    0x002CCE,
    0x002CD0,
    0x002CD2,
    0x002CD4,
    0x002CD6,
    0x002CD8,
    0x002CDA,
    0x002CDC,
    0x002CDE,
    0x002CE0,
    0x002CE2,
    0x002CEB,
    0x002CED,
    0x002CF2,
    0x002D6F,
    0x002E9F,
    0x002EF3,
    0x003000,
    0x003036,
    0x00309F,
    0x0030FF,
    0x00A640,
    0x00A642,
    0x00A644,
    0x00A646,
    0x00A648,
    0x00A64A,
    0x00A64C,
    0x00A64E,
    0x00A650,
    0x00A652,
    0x00A654,
    0x00A656,
    0x00A658,
    0x00A65A,
    0x00A65C,
    0x00A65E,
    0x00A660,
    0x00A662,
    0x00A664,
    0x00A666,
    0x00A668,
    0x00A66A,
    0x00A66C,
    0x00A680,
    0x00A682,
    0x00A684,
    0x00A686,
    0x00A688,
    0x00A68A,
    0x00A68C,
    0x00A68E,
    0x00A690,
    0x00A692,
    0x00A694,
    0x00A696,
    0x00A698,
    0x00A69A,
    0x00A722,
    0x00A724,
    0x00A726,
    0x00A728,
    0x00A72A,
    0x00A72C,
    0x00A72E,
    0x00A732,
    0x00A734,
    0x00A736,
    0x00A738,
    0x00A73A,
    0x00A73C,
    0x00A73E,
    0x00A740,
    0x00A742,
    0x00A744,
    0x00A746,
    0x00A748,
    0x00A74A,
    0x00A74C,
    0x00A74E,
    0x00A750,
    0x00A752,
    0x00A754,
    0x00A756,
    0x00A758,
    0x00A75A,
    0x00A75C,
    0x00A75E,
    0x00A760,
    0x00A762,
    0x00A764,
    0x00A766,
    0x00A768,
    0x00A76A,
    0x00A76C,
    0x00A76E,
    0x00A770,
    0x00A779,
    0x00A77B,
    0x00A780,
    0x00A782,
    0x00A784,
    0x00A786,
    0x00A78B,
    0x00A78D,
    0x00A790,
    0x00A792,
    0x00A796,
    0x00A798,
    0x00A79A,
    0x00A79C,
    0x00A79E,
    0x00A7A0,
    0x00A7A2,
    0x00A7A4,
    0x00A7A6,
    0x00A7A8,
    0x00A7B6,
    0x00FA10,
    0x00FA12,
    0x00FA20,
    0x00FA22,
    0x00FB1D,
    0x00FB3E,
    0x00FE74,
    0x00FEFF,
    0x01D4A2,
    0x01D4BB,
    0x01D546,
    0x01EE24,
    0x01EE27,
    0x01EE39,
    0x01EE3B,
    0x01EE42,
    0x01EE47,
    0x01EE49,
    0x01EE4B,
    0x01EE54,
    0x01EE57,
    0x01EE59,
    0x01EE5B,
    0x01EE5D,
    0x01EE5F,
    0x01EE64,
    0x01EE7E,
    0x01F190
  ],
  ranges: [
    [0x000041, 0x00005A],
    [0x0000B2, 0x0000B5],
    [0x0000B8, 0x0000BA],
    [0x0000BC, 0x0000BE],
    [0x0000C0, 0x0000D6],
    [0x0000D8, 0x0000DF],
    [0x000132, 0x000134],
    [0x00013F, 0x000141],
    [0x000149, 0x00014A],
    [0x000178, 0x000179],
    [0x000181, 0x000182],
    [0x000186, 0x000187],
    [0x000189, 0x00018B],
    [0x00018E, 0x000191],
    [0x000193, 0x000194],
    [0x000196, 0x000198],
    [0x00019C, 0x00019D],
    [0x00019F, 0x0001A0],
    [0x0001A6, 0x0001A7],
    [0x0001AE, 0x0001AF],
    [0x0001B1, 0x0001B3],
    [0x0001B7, 0x0001B8],
    [0x0001C4, 0x0001CD],
    [0x0001F1, 0x0001F4],
    [0x0001F6, 0x0001F8],
    [0x00023A, 0x00023B],
    [0x00023D, 0x00023E],
    [0x000243, 0x000246],
    [0x0002B0, 0x0002B8],
    [0x0002D8, 0x0002DD],
    [0x0002E0, 0x0002E4],
    [0x000340, 0x000341],
    [0x000343, 0x000345],
    [0x00037E, 0x00037F],
    [0x000384, 0x00038A],
    [0x00038E, 0x00038F],
    [0x000391, 0x0003A1],
    [0x0003A3, 0x0003AB],
    [0x0003CF, 0x0003D6],
    [0x0003F0, 0x0003F2],
    [0x0003F4, 0x0003F5],
    [0x0003F9, 0x0003FA],
    [0x0003FD, 0x00042F],
    [0x0004C0, 0x0004C1],
    [0x000531, 0x000556],
    [0x000675, 0x000678],
    [0x000958, 0x00095F],
    [0x0009DC, 0x0009DD],
    [0x000A59, 0x000A5B],
    [0x000B5C, 0x000B5D],
    [0x000EDC, 0x000EDD],
    [0x000F75, 0x000F79],
    [0x0010A0, 0x0010C5],
    [0x00115F, 0x001160],
    [0x0013F8, 0x0013FD],
    [0x0017B4, 0x0017B5],
    [0x00180B, 0x00180E],
    [0x001C80, 0x001C88],
    [0x001D2C, 0x001D2E],
    [0x001D30, 0x001D3A],
    [0x001D3C, 0x001D4D],
    [0x001D4F, 0x001D6A],
    [0x001D9B, 0x001DBF],
    [0x001E9A, 0x001E9B],
    [0x001F08, 0x001F0F],
    [0x001F18, 0x001F1D],
    [0x001F28, 0x001F2F],
    [0x001F38, 0x001F3F],
    [0x001F48, 0x001F4D],
    [0x001F68, 0x001F6F],
    [0x001F80, 0x001FAF],
    [0x001FB2, 0x001FB4],
    [0x001FB7, 0x001FC4],
    [0x001FC7, 0x001FCF],
    [0x001FD8, 0x001FDB],
    [0x001FDD, 0x001FDF],
    [0x001FE8, 0x001FEF],
    [0x001FF2, 0x001FF4],
    [0x001FF7, 0x001FFE],
    [0x002000, 0x00200F],
    [0x002024, 0x002026],
    [0x00202A, 0x00202F],
    [0x002033, 0x002034],
    [0x002036, 0x002037],
    [0x002047, 0x002049],
    [0x00205F, 0x002071],
    [0x002074, 0x00208E],
    [0x002090, 0x00209C],
    [0x002100, 0x002103],
    [0x002105, 0x002107],
    [0x002109, 0x002113],
    [0x002115, 0x002116],
    [0x002119, 0x00211D],
    [0x002120, 0x002122],
    [0x00212A, 0x00212D],
    [0x00212F, 0x002139],
    [0x00213B, 0x002140],
    [0x002145, 0x002149],
    [0x002150, 0x00217F],
    [0x00222C, 0x00222D],
    [0x00222F, 0x002230],
    [0x002329, 0x00232A],
    [0x002460, 0x0024EA],
    [0x002A74, 0x002A76],
    [0x002C00, 0x002C2E],
    [0x002C62, 0x002C64],
    [0x002C6D, 0x002C70],
    [0x002C7C, 0x002C80],
    [0x002F00, 0x002FD5],
    [0x003038, 0x00303A],
    [0x00309B, 0x00309C],
    [0x003131, 0x00318E],
    [0x003192, 0x00319F],
    [0x003200, 0x00321E],
    [0x003220, 0x003247],
    [0x003250, 0x00327E],
    [0x003280, 0x0032FE],
    [0x003300, 0x0033FF],
    [0x00A69C, 0x00A69D],
    [0x00A77D, 0x00A77E],
    [0x00A7AA, 0x00A7AE],
    [0x00A7B0, 0x00A7B4],
    [0x00A7F8, 0x00A7F9],
    [0x00AB5C, 0x00AB5F],
    [0x00AB70, 0x00ABBF],
    [0x00F900, 0x00FA0D],
    [0x00FA15, 0x00FA1E],
    [0x00FA25, 0x00FA26],
    [0x00FA2A, 0x00FA6D],
    [0x00FA70, 0x00FAD9],
    [0x00FB00, 0x00FB06],
    [0x00FB13, 0x00FB17],
    [0x00FB1F, 0x00FB36],
    [0x00FB38, 0x00FB3C],
    [0x00FB40, 0x00FB41],
    [0x00FB43, 0x00FB44],
    [0x00FB46, 0x00FBB1],
    [0x00FBD3, 0x00FD3D],
    [0x00FD50, 0x00FD8F],
    [0x00FD92, 0x00FDC7],
    [0x00FDF0, 0x00FDFC],
    [0x00FE00, 0x00FE19],
    [0x00FE30, 0x00FE44],
    [0x00FE47, 0x00FE52],
    [0x00FE54, 0x00FE66],
    [0x00FE68, 0x00FE6B],
    [0x00FE70, 0x00FE72],
    [0x00FE76, 0x00FEFC],
    [0x00FF01, 0x00FFBE],
    [0x00FFC2, 0x00FFC7],
    [0x00FFCA, 0x00FFCF],
    [0x00FFD2, 0x00FFD7],
    [0x00FFDA, 0x00FFDC],
    [0x00FFE0, 0x00FFE6],
    [0x00FFE8, 0x00FFEE],
    [0x00FFF0, 0x00FFF8],
    [0x010400, 0x010427],
    [0x0104B0, 0x0104D3],
    [0x010C80, 0x010CB2],
    [0x0118A0, 0x0118BF],
    [0x01BCA0, 0x01BCA3],
    [0x01D15E, 0x01D164],
    [0x01D173, 0x01D17A],
    [0x01D1BB, 0x01D1C0],
    [0x01D400, 0x01D454],
    [0x01D456, 0x01D49C],
    [0x01D49E, 0x01D49F],
    [0x01D4A5, 0x01D4A6],
    [0x01D4A9, 0x01D4AC],
    [0x01D4AE, 0x01D4B9],
    [0x01D4BD, 0x01D4C3],
    [0x01D4C5, 0x01D505],
    [0x01D507, 0x01D50A],
    [0x01D50D, 0x01D514],
    [0x01D516, 0x01D51C],
    [0x01D51E, 0x01D539],
    [0x01D53B, 0x01D53E],
    [0x01D540, 0x01D544],
    [0x01D54A, 0x01D550],
    [0x01D552, 0x01D6A5],
    [0x01D6A8, 0x01D7CB],
    [0x01D7CE, 0x01D7FF],
    [0x01E900, 0x01E921],
    [0x01EE00, 0x01EE03],
    [0x01EE05, 0x01EE1F],
    [0x01EE21, 0x01EE22],
    [0x01EE29, 0x01EE32],
    [0x01EE34, 0x01EE37],
    [0x01EE4D, 0x01EE4F],
    [0x01EE51, 0x01EE52],
    [0x01EE61, 0x01EE62],
    [0x01EE67, 0x01EE6A],
    [0x01EE6C, 0x01EE72],
    [0x01EE74, 0x01EE77],
    [0x01EE79, 0x01EE7C],
    [0x01EE80, 0x01EE89],
    [0x01EE8B, 0x01EE9B],
    [0x01EEA1, 0x01EEA3],
    [0x01EEA5, 0x01EEA9],
    [0x01EEAB, 0x01EEBB],
    [0x01F100, 0x01F10A],
    [0x01F110, 0x01F12E],
    [0x01F130, 0x01F14F],
    [0x01F16A, 0x01F16B],
    [0x01F200, 0x01F202],
    [0x01F210, 0x01F23B],
    [0x01F240, 0x01F248],
    [0x01F250, 0x01F251],
    [0x02F800, 0x02FA1D],
    [0x0E0000, 0x0E0FFF]
  ]
});
testPropertyEscapes(
  /^\p{Changes_When_NFKC_Casefolded}+$/u,
  matchSymbols,
  "\\p{Changes_When_NFKC_Casefolded}"
);
testPropertyEscapes(
  /^\p{CWKCF}+$/u,
  matchSymbols,
  "\\p{CWKCF}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0000A9,
    0x0000AE,
    0x0000BB,
    0x0000BF,
    0x0000D7,
    0x000101,
    0x000103,
    0x000105,
    0x000107,
    0x000109,
    0x00010B,
    0x00010D,
    0x00010F,
    0x000111,
    0x000113,
    0x000115,
    0x000117,
    0x000119,
    0x00011B,
    0x00011D,
    0x00011F,
    0x000121,
    0x000123,
    0x000125,
    0x000127,
    0x000129,
    0x00012B,
    0x00012D,
    0x00012F,
    0x000131,
    0x000135,
    0x00013A,
    0x00013C,
    0x00013E,
    0x000142,
    0x000144,
    0x000146,
    0x000148,
    0x00014B,
    0x00014D,
    0x00014F,
    0x000151,
    0x000153,
    0x000155,
    0x000157,
    0x000159,
    0x00015B,
    0x00015D,
    0x00015F,
    0x000161,
    0x000163,
    0x000165,
    0x000167,
    0x000169,
    0x00016B,
    0x00016D,
    0x00016F,
    0x000171,
    0x000173,
    0x000175,
    0x000177,
    0x00017A,
    0x00017C,
    0x00017E,
    0x000180,
    0x000183,
    0x000185,
    0x000188,
    0x000192,
    0x000195,
    0x00019E,
    0x0001A1,
    0x0001A3,
    0x0001A5,
    0x0001A8,
    0x0001AD,
    0x0001B0,
    0x0001B4,
    0x0001B6,
    0x0001CE,
    0x0001D0,
    0x0001D2,
    0x0001D4,
    0x0001D6,
    0x0001D8,
    0x0001DA,
    0x0001DF,
    0x0001E1,
    0x0001E3,
    0x0001E5,
    0x0001E7,
    0x0001E9,
    0x0001EB,
    0x0001ED,
    0x0001F5,
    0x0001F9,
    0x0001FB,
    0x0001FD,
    0x0001FF,
    0x000201,
    0x000203,
    0x000205,
    0x000207,
    0x000209,
    0x00020B,
    0x00020D,
    0x00020F,
    0x000211,
    0x000213,
    0x000215,
    0x000217,
    0x000219,
    0x00021B,
    0x00021D,
    0x00021F,
    0x000221,
    0x000223,
    0x000225,
    0x000227,
    0x000229,
    0x00022B,
    0x00022D,
    0x00022F,
    0x000231,
    0x00023C,
    0x000242,
    0x000247,
    0x000249,
    0x00024B,
    0x00024D,
    0x000342,
    0x000371,
    0x000373,
    0x000375,
    0x00038B,
    0x00038D,
    0x000390,
    0x0003A2,
    0x0003D7,
    0x0003D9,
    0x0003DB,
    0x0003DD,
    0x0003DF,
    0x0003E1,
    0x0003E3,
    0x0003E5,
    0x0003E7,
    0x0003E9,
    0x0003EB,
    0x0003ED,
    0x0003EF,
    0x0003F3,
    0x0003F6,
    0x0003F8,
    0x000461,
    0x000463,
    0x000465,
    0x000467,
    0x000469,
    0x00046B,
    0x00046D,
    0x00046F,
    0x000471,
    0x000473,
    0x000475,
    0x000477,
    0x000479,
    0x00047B,
    0x00047D,
    0x00047F,
    0x00048B,
    0x00048D,
    0x00048F,
    0x000491,
    0x000493,
    0x000495,
    0x000497,
    0x000499,
    0x00049B,
    0x00049D,
    0x00049F,
    0x0004A1,
    0x0004A3,
    0x0004A5,
    0x0004A7,
    0x0004A9,
    0x0004AB,
    0x0004AD,
    0x0004AF,
    0x0004B1,
    0x0004B3,
    0x0004B5,
    0x0004B7,
    0x0004B9,
    0x0004BB,
    0x0004BD,
    0x0004BF,
    0x0004C2,
    0x0004C4,
    0x0004C6,
    0x0004C8,
    0x0004CA,
    0x0004CC,
    0x0004D1,
    0x0004D3,
    0x0004D5,
    0x0004D7,
    0x0004D9,
    0x0004DB,
    0x0004DD,
    0x0004DF,
    0x0004E1,
    0x0004E3,
    0x0004E5,
    0x0004E7,
    0x0004E9,
    0x0004EB,
    0x0004ED,
    0x0004EF,
    0x0004F1,
    0x0004F3,
    0x0004F5,
    0x0004F7,
    0x0004F9,
    0x0004FB,
    0x0004FD,
    0x0004FF,
    0x000501,
    0x000503,
    0x000505,
    0x000507,
    0x000509,
    0x00050B,
    0x00050D,
    0x00050F,
    0x000511,
    0x000513,
    0x000515,
    0x000517,
    0x000519,
    0x00051B,
    0x00051D,
    0x00051F,
    0x000521,
    0x000523,
    0x000525,
    0x000527,
    0x000529,
    0x00052B,
    0x00052D,
    0x0009DE,
    0x000F74,
    0x0010C6,
    0x001D2F,
    0x001D3B,
    0x001D4E,
    0x001E01,
    0x001E03,
    0x001E05,
    0x001E07,
    0x001E09,
    0x001E0B,
    0x001E0D,
    0x001E0F,
    0x001E11,
    0x001E13,
    0x001E15,
    0x001E17,
    0x001E19,
    0x001E1B,
    0x001E1D,
    0x001E1F,
    0x001E21,
    0x001E23,
    0x001E25,
    0x001E27,
    0x001E29,
    0x001E2B,
    0x001E2D,
    0x001E2F,
    0x001E31,
    0x001E33,
    0x001E35,
    0x001E37,
    0x001E39,
    0x001E3B,
    0x001E3D,
    0x001E3F,
    0x001E41,
    0x001E43,
    0x001E45,
    0x001E47,
    0x001E49,
    0x001E4B,
    0x001E4D,
    0x001E4F,
    0x001E51,
    0x001E53,
    0x001E55,
    0x001E57,
    0x001E59,
    0x001E5B,
    0x001E5D,
    0x001E5F,
    0x001E61,
    0x001E63,
    0x001E65,
    0x001E67,
    0x001E69,
    0x001E6B,
    0x001E6D,
    0x001E6F,
    0x001E71,
    0x001E73,
    0x001E75,
    0x001E77,
    0x001E79,
    0x001E7B,
    0x001E7D,
    0x001E7F,
    0x001E81,
    0x001E83,
    0x001E85,
    0x001E87,
    0x001E89,
    0x001E8B,
    0x001E8D,
    0x001E8F,
    0x001E91,
    0x001E93,
    0x001E9F,
    0x001EA1,
    0x001EA3,
    0x001EA5,
    0x001EA7,
    0x001EA9,
    0x001EAB,
    0x001EAD,
    0x001EAF,
    0x001EB1,
    0x001EB3,
    0x001EB5,
    0x001EB7,
    0x001EB9,
    0x001EBB,
    0x001EBD,
    0x001EBF,
    0x001EC1,
    0x001EC3,
    0x001EC5,
    0x001EC7,
    0x001EC9,
    0x001ECB,
    0x001ECD,
    0x001ECF,
    0x001ED1,
    0x001ED3,
    0x001ED5,
    0x001ED7,
    0x001ED9,
    0x001EDB,
    0x001EDD,
    0x001EDF,
    0x001EE1,
    0x001EE3,
    0x001EE5,
    0x001EE7,
    0x001EE9,
    0x001EEB,
    0x001EED,
    0x001EEF,
    0x001EF1,
    0x001EF3,
    0x001EF5,
    0x001EF7,
    0x001EF9,
    0x001EFB,
    0x001EFD,
    0x001F5A,
    0x001F5C,
    0x001F5E,
    0x001F70,
    0x001F72,
    0x001F74,
    0x001F76,
    0x001F78,
    0x001F7A,
    0x001F7C,
    0x001FDC,
    0x001FFF,
    0x002010,
    0x002035,
    0x00203D,
    0x00208F,
    0x002104,
    0x002108,
    0x002114,
    0x002123,
    0x002125,
    0x002127,
    0x002129,
    0x00212E,
    0x00213A,
    0x00222E,
    0x002C61,
    0x002C68,
    0x002C6A,
    0x002C6C,
    0x002C71,
    0x002C81,
    0x002C83,
    0x002C85,
    0x002C87,
    0x002C89,
    0x002C8B,
    0x002C8D,
    0x002C8F,
    0x002C91,
    0x002C93,
    0x002C95,
    0x002C97,
    0x002C99,
    0x002C9B,
    0x002C9D,
    0x002C9F,
    0x002CA1,
    0x002CA3,
    0x002CA5,
    0x002CA7,
    0x002CA9,
    0x002CAB,
    0x002CAD,
    0x002CAF,
    0x002CB1,
    0x002CB3,
    0x002CB5,
    0x002CB7,
    0x002CB9,
    0x002CBB,
    0x002CBD,
    0x002CBF,
    0x002CC1,
    0x002CC3,
    0x002CC5,
    0x002CC7,
    0x002CC9,
    0x002CCB,
    0x002CCD,
    0x002CCF,
    0x002CD1,
    0x002CD3,
    0x002CD5,
    0x002CD7,
    0x002CD9,
    0x002CDB,
    0x002CDD,
    0x002CDF,
    0x002CE1,
    0x002CEC,
    0x003037,
    0x00321F,
    0x00327F,
    0x0032FF,
    0x00A641,
    0x00A643,
    0x00A645,
    0x00A647,
    0x00A649,
    0x00A64B,
    0x00A64D,
    0x00A64F,
    0x00A651,
    0x00A653,
    0x00A655,
    0x00A657,
    0x00A659,
    0x00A65B,
    0x00A65D,
    0x00A65F,
    0x00A661,
    0x00A663,
    0x00A665,
    0x00A667,
    0x00A669,
    0x00A66B,
    0x00A681,
    0x00A683,
    0x00A685,
    0x00A687,
    0x00A689,
    0x00A68B,
    0x00A68D,
    0x00A68F,
    0x00A691,
    0x00A693,
    0x00A695,
    0x00A697,
    0x00A699,
    0x00A69B,
    0x00A723,
    0x00A725,
    0x00A727,
    0x00A729,
    0x00A72B,
    0x00A72D,
    0x00A733,
    0x00A735,
    0x00A737,
    0x00A739,
    0x00A73B,
    0x00A73D,
    0x00A73F,
    0x00A741,
    0x00A743,
    0x00A745,
    0x00A747,
    0x00A749,
    0x00A74B,
    0x00A74D,
    0x00A74F,
    0x00A751,
    0x00A753,
    0x00A755,
    0x00A757,
    0x00A759,
    0x00A75B,
    0x00A75D,
    0x00A75F,
    0x00A761,
    0x00A763,
    0x00A765,
    0x00A767,
    0x00A769,
    0x00A76B,
    0x00A76D,
    0x00A76F,
    0x00A77A,
    0x00A77C,
    0x00A77F,
    0x00A781,
    0x00A783,
    0x00A785,
    0x00A78C,
    0x00A791,
    0x00A797,
    0x00A799,
    0x00A79B,
    0x00A79D,
    0x00A79F,
    0x00A7A1,
    0x00A7A3,
    0x00A7A5,
    0x00A7A7,
    0x00A7A9,
    0x00A7AF,
    0x00A7B5,
    0x00FA11,
    0x00FA1F,
    0x00FA21,
    0x00FB1E,
    0x00FB37,
    0x00FB3D,
    0x00FB3F,
    0x00FB42,
    0x00FB45,
    0x00FE53,
    0x00FE67,
    0x00FE73,
    0x00FE75,
    0x00FF00,
    0x00FFE7,
    0x00FFEF,
    0x01D455,
    0x01D49D,
    0x01D4AD,
    0x01D4BA,
    0x01D4BC,
    0x01D4C4,
    0x01D506,
    0x01D515,
    0x01D51D,
    0x01D53A,
    0x01D53F,
    0x01D545,
    0x01D551,
    0x01EE04,
    0x01EE20,
    0x01EE23,
    0x01EE28,
    0x01EE33,
    0x01EE38,
    0x01EE3A,
    0x01EE48,
    0x01EE4A,
    0x01EE4C,
    0x01EE50,
    0x01EE53,
    0x01EE58,
    0x01EE5A,
    0x01EE5C,
    0x01EE5E,
    0x01EE60,
    0x01EE63,
    0x01EE6B,
    0x01EE73,
    0x01EE78,
    0x01EE7D,
    0x01EE7F,
    0x01EE8A,
    0x01EEA4,
    0x01EEAA,
    0x01F12F
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000040],
    [0x00005B, 0x00009F],
    [0x0000A1, 0x0000A7],
    [0x0000AB, 0x0000AC],
    [0x0000B0, 0x0000B1],
    [0x0000B6, 0x0000B7],
    [0x0000E0, 0x0000FF],
    [0x000137, 0x000138],
    [0x00018C, 0x00018D],
    [0x000199, 0x00019B],
    [0x0001AA, 0x0001AB],
    [0x0001B9, 0x0001BB],
    [0x0001BD, 0x0001C3],
    [0x0001DC, 0x0001DD],
    [0x0001EF, 0x0001F0],
    [0x000233, 0x000239],
    [0x00023F, 0x000240],
    [0x00024F, 0x0002AF],
    [0x0002B9, 0x0002D7],
    [0x0002DE, 0x0002DF],
    [0x0002E5, 0x00033F],
    [0x000346, 0x00034E],
    [0x000350, 0x00036F],
    [0x000377, 0x000379],
    [0x00037B, 0x00037D],
    [0x000380, 0x000383],
    [0x0003AC, 0x0003C1],
    [0x0003C3, 0x0003CE],
    [0x0003FB, 0x0003FC],
    [0x000430, 0x00045F],
    [0x000481, 0x000489],
    [0x0004CE, 0x0004CF],
    [0x00052F, 0x000530],
    [0x000557, 0x000586],
    [0x000588, 0x00061B],
    [0x00061D, 0x000674],
    [0x000679, 0x000957],
    [0x000960, 0x0009DB],
    [0x0009E0, 0x000A32],
    [0x000A34, 0x000A35],
    [0x000A37, 0x000A58],
    [0x000A5C, 0x000A5D],
    [0x000A5F, 0x000B5B],
    [0x000B5E, 0x000E32],
    [0x000E34, 0x000EB2],
    [0x000EB4, 0x000EDB],
    [0x000EDE, 0x000F0B],
    [0x000F0D, 0x000F42],
    [0x000F44, 0x000F4C],
    [0x000F4E, 0x000F51],
    [0x000F53, 0x000F56],
    [0x000F58, 0x000F5B],
    [0x000F5D, 0x000F68],
    [0x000F6A, 0x000F72],
    [0x000F7A, 0x000F80],
    [0x000F82, 0x000F92],
    [0x000F94, 0x000F9C],
    [0x000F9E, 0x000FA1],
    [0x000FA3, 0x000FA6],
    [0x000FA8, 0x000FAB],
    [0x000FAD, 0x000FB8],
    [0x000FBA, 0x00109F],
    [0x0010C8, 0x0010CC],
    [0x0010CE, 0x0010FB],
    [0x0010FD, 0x00115E],
    [0x001161, 0x0013F7],
    [0x0013FE, 0x0017B3],
    [0x0017B6, 0x00180A],
    [0x00180F, 0x001C7F],
    [0x001C89, 0x001D2B],
    [0x001D6B, 0x001D77],
    [0x001D79, 0x001D9A],
    [0x001DC0, 0x001DFF],
    [0x001E95, 0x001E99],
    [0x001E9C, 0x001E9D],
    [0x001EFF, 0x001F07],
    [0x001F10, 0x001F17],
    [0x001F1E, 0x001F27],
    [0x001F30, 0x001F37],
    [0x001F40, 0x001F47],
    [0x001F4E, 0x001F58],
    [0x001F60, 0x001F67],
    [0x001F7E, 0x001F7F],
    [0x001FB0, 0x001FB1],
    [0x001FB5, 0x001FB6],
    [0x001FC5, 0x001FC6],
    [0x001FD0, 0x001FD2],
    [0x001FD4, 0x001FD7],
    [0x001FE0, 0x001FE2],
    [0x001FE4, 0x001FE7],
    [0x001FF0, 0x001FF1],
    [0x001FF5, 0x001FF6],
    [0x002012, 0x002016],
    [0x002018, 0x002023],
    [0x002027, 0x002029],
    [0x002030, 0x002032],
    [0x002038, 0x00203B],
    [0x00203F, 0x002046],
    [0x00204A, 0x002056],
    [0x002058, 0x00205E],
    [0x002072, 0x002073],
    [0x00209D, 0x0020A7],
    [0x0020A9, 0x0020FF],
    [0x002117, 0x002118],
    [0x00211E, 0x00211F],
    [0x002141, 0x002144],
    [0x00214A, 0x00214F],
    [0x002180, 0x002182],
    [0x002184, 0x002188],
    [0x00218A, 0x00222B],
    [0x002231, 0x002328],
    [0x00232B, 0x00245F],
    [0x0024EB, 0x002A0B],
    [0x002A0D, 0x002A73],
    [0x002A77, 0x002ADB],
    [0x002ADD, 0x002BFF],
    [0x002C2F, 0x002C5F],
    [0x002C65, 0x002C66],
    [0x002C73, 0x002C74],
    [0x002C76, 0x002C7B],
    [0x002CE3, 0x002CEA],
    [0x002CEE, 0x002CF1],
    [0x002CF3, 0x002D6E],
    [0x002D70, 0x002E9E],
    [0x002EA0, 0x002EF2],
    [0x002EF4, 0x002EFF],
    [0x002FD6, 0x002FFF],
    [0x003001, 0x003035],
    [0x00303B, 0x00309A],
    [0x00309D, 0x00309E],
    [0x0030A0, 0x0030FE],
    [0x003100, 0x003130],
    [0x00318F, 0x003191],
    [0x0031A0, 0x0031FF],
    [0x003248, 0x00324F],
    [0x003400, 0x00A63F],
    [0x00A66D, 0x00A67F],
    [0x00A69E, 0x00A721],
    [0x00A72F, 0x00A731],
    [0x00A771, 0x00A778],
    [0x00A787, 0x00A78A],
    [0x00A78E, 0x00A78F],
    [0x00A793, 0x00A795],
    [0x00A7B7, 0x00A7F7],
    [0x00A7FA, 0x00AB5B],
    [0x00AB60, 0x00AB6F],
    [0x00ABC0, 0x00DBFF],
    [0x00E000, 0x00F8FF],
    [0x00FA0E, 0x00FA0F],
    [0x00FA13, 0x00FA14],
    [0x00FA23, 0x00FA24],
    [0x00FA27, 0x00FA29],
    [0x00FA6E, 0x00FA6F],
    [0x00FADA, 0x00FAFF],
    [0x00FB07, 0x00FB12],
    [0x00FB18, 0x00FB1C],
    [0x00FBB2, 0x00FBD2],
    [0x00FD3E, 0x00FD4F],
    [0x00FD90, 0x00FD91],
    [0x00FDC8, 0x00FDEF],
    [0x00FDFD, 0x00FDFF],
    [0x00FE1A, 0x00FE2F],
    [0x00FE45, 0x00FE46],
    [0x00FE6C, 0x00FE6F],
    [0x00FEFD, 0x00FEFE],
    [0x00FFBF, 0x00FFC1],
    [0x00FFC8, 0x00FFC9],
    [0x00FFD0, 0x00FFD1],
    [0x00FFD8, 0x00FFD9],
    [0x00FFDD, 0x00FFDF],
    [0x00FFF9, 0x0103FF],
    [0x010428, 0x0104AF],
    [0x0104D4, 0x010C7F],
    [0x010CB3, 0x01189F],
    [0x0118C0, 0x01BC9F],
    [0x01BCA4, 0x01D15D],
    [0x01D165, 0x01D172],
    [0x01D17B, 0x01D1BA],
    [0x01D1C1, 0x01D3FF],
    [0x01D4A0, 0x01D4A1],
    [0x01D4A3, 0x01D4A4],
    [0x01D4A7, 0x01D4A8],
    [0x01D50B, 0x01D50C],
    [0x01D547, 0x01D549],
    [0x01D6A6, 0x01D6A7],
    [0x01D7CC, 0x01D7CD],
    [0x01D800, 0x01E8FF],
    [0x01E922, 0x01EDFF],
    [0x01EE25, 0x01EE26],
    [0x01EE3C, 0x01EE41],
    [0x01EE43, 0x01EE46],
    [0x01EE55, 0x01EE56],
    [0x01EE65, 0x01EE66],
    [0x01EE9C, 0x01EEA0],
    [0x01EEBC, 0x01F0FF],
    [0x01F10B, 0x01F10F],
    [0x01F150, 0x01F169],
    [0x01F16C, 0x01F18F],
    [0x01F191, 0x01F1FF],
    [0x01F203, 0x01F20F],
    [0x01F23C, 0x01F23F],
    [0x01F249, 0x01F24F],
    [0x01F252, 0x02F7FF],
    [0x02FA1E, 0x0DFFFF],
    [0x0E1000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Changes_When_NFKC_Casefolded}+$/u,
  nonMatchSymbols,
  "\\P{Changes_When_NFKC_Casefolded}"
);
testPropertyEscapes(
  /^\P{CWKCF}+$/u,
  nonMatchSymbols,
  "\\P{CWKCF}"
);