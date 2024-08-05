'use client'
export const fallbackLng = "hi";
export const languages = [fallbackLng, "es", "en", "fr", "ae", "pt", "du", "cn", "hi"];
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  };
}
