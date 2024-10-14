export interface CarouselItem {
  type: "pictureCard" | "videoCard" | "articleCard" | "courseCard";
  id?: string;
  src?: string;
  alt?: string;
  link?: string;
  thumbnailImg?: string;
  playBtn?: string;
  videoTitle?: string;
  authorImg?: string;
  authorName?: string;
  dayPosted?: string;
  uniName?: string;
  articleImg?: string;
  articleTitle?: string;
  articleContent?: string;
  articlePostedDate?: string;
  courseImg?: string;
  closebtn?: string;
  courseTitle?: string;
  uniLogo?: string;
  courseuniName?: string;
  countryFlag?: string;
  countryName?: string;
  degreeType?: string;
  years?: string;
  fees?: string;
  isFastlaneTag?: boolean | undefined;
  subText?: string;
}

export interface CheckboxOption {
  id: string;
  label: string;
}

export interface homepageBanner {
  title: string;
  description: string;
  desktopImg: string;
  mobileImg: string;
  ctaText: string;
}

export interface OnboardingStepProps {
  questionText: string;
  subText: string;
}

export interface CheckboxProps {
  labelText: string;
  fieldId: string;
  name: string;
  checkboxStyles?:string
  checkboxPadstyles?:string
  disableChange?:() => void;
}

export interface listDropdownProps {
  options: listDropdownOptionProps[];
}
  export interface footerProps {
    title: string
    description: string
    ctaText: string
    linkTitle:string
    socialLinkTitle:string
    navLinks:string[]
    socialLinks:string[]
    copyRights:string
  }

  export interface MainDropdownProps {
    options: string[];
    isOpen: boolean;
    handleOptionClick: (option: string) => void;
  }
  export interface  logoSliderProps{
    imgSrc:string[];
  }


export interface listDropdownOptionProps {
  listDropdownOptionHeader: string;
  listDropDownOptions: dropdownProps[];
}

export interface dropdownProps {
  id: number;
  label: string;
  value: string;
}

export interface logoSliderProps {
  imgSrc: string[];
}
