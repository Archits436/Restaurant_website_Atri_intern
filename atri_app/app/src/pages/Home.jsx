import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { usenavbarCb, useNavbarButtonsCb, useFlex4Cb, useNavbarLinksCb, useBestBannerCb, useBestBannerLeftCb, useFlex8Cb, useOrangeBGCb, useBestBurgerImageCb, useFavouriteAppsCb, useFlex10Cb, useFlex11Cb, useDiv3Cb, useMenuContainerCb, useBreakfastCb, useMainDishesCb, useDrinksCb, useDessertsCb, useFlex17Cb, useAboutUsContainerCb, useAboutUsRightCb, useFlex20Cb, useContactDetailsCb, useFlex22Cb, useFlex23Cb, useFlex24Cb, useFlex25Cb, useFlex26Cb, useFlex27Cb, useFlex28Cb, useFlex29Cb, useFlex35Cb, useFlex30Cb, useFlex31Cb, useFlex32Cb, useFlex33Cb, useFlex36Cb, useFlex38Cb, useFlex39Cb, useFlex41Cb, useFlex42Cb, useFlex40Cb, useFlex43Cb, useFlex45Cb, useFlex47Cb, useFlex49Cb, useFlex50Cb, useFlex44Cb, useFlex51Cb, useFlex54Cb, useFlex55Cb, useFlex56Cb, useFlex57Cb, useFlex59Cb, useFlex63Cb, useFlex64Cb, useFlex62Cb, useFlex65Cb, useFlex66Cb, useFlex67Cb, useFlex68Cb, useFlex72Cb, useFlex74Cb, useFlex75Cb, useFlex69Cb, useFlex90Cb, useFlex92Cb, useFlex96Cb, useFlex97Cb, useFlex93Cb, useFlex98Cb, useFlex99Cb, useFlex94Cb, useFlex100Cb, useFlex101Cb, useFlex95Cb, useFlex102Cb, useFlex103Cb, useFlex104Cb, useFlex108Cb, useFlex109Cb, useFlex110Cb, useFlex117Cb, useFlex118Cb, useFlex121Cb, useFlex119Cb, useFlex122Cb, useFlex123Cb, useFlex120Cb, useFlex124Cb, useFlex125Cb, useMenuHeadingCb, useTextBox28Cb, useTextBox58Cb, useTextBox59Cb, useTextBox60Cb, useOrderOnlineButtonCb, useReservateButtonCb, usenavbar_logoCb, useHomeLinkCb, useAboutLinkCb, useMenuLinkCb, usePagesLinkCb, useCartLinkCb, useBestPlaceCb, useBurgerLACb, useBestLoremCb, useBestReservateCb, useBestOrderCb, useImage3Cb, useRappiCb, useGrubhubCb, useOrderTextCb, usePostmatesCb, useDoorDashCb, useBrowseMenuCb, useBreakfastImageCb, useBreakfastNameCb, useMenuDesc1Cb, useExploreMenu1Cb, useDishesImageCb, useDishesNameCb, useMenuDesc2Cb, useExploreMenu2Cb, useDrinksImageCb, useDrinksNameCb, useMenuDesc3Cb, useExploreMenu3Cb, useDessertsImageCb, useDessertsNameCb, useMenuDesc4Cb, useExploreMenu4Cb, useOrderOnlineCb, useBookATableCb, useImage13Cb, useAboutUsHeadCb, useAboutUs1Cb, useAboutUs2Cb, useAboutUsCb, useJoinOurTeamCb, useVisitUsCb, useLocationImageCb, useAddressCb, usePhoneImageCb, usePhoneNoCb, useEmailImageCb, useEmailCb, useImage20Cb, usePrice1Cb, useTextBox30Cb, useTextBox31Cb, useImage21Cb, usePrice2Cb, useTextBox33Cb, useTextBox34Cb, useImage22Cb, usePrice3Cb, useTextBox36Cb, useTextBox37Cb, useImage23Cb, usePrice4Cb, useTextBox39Cb, useTextBox40Cb, useImage24Cb, usePrice5Cb, useTextBox42Cb, useTextBox43Cb, useImage25Cb, usePrice6Cb, useTextBox45Cb, useTextBox46Cb, useImage26Cb, usePrice7Cb, useTextBox48Cb, useTextBox49Cb, useImage29Cb, usePrice8Cb, useTextBox51Cb, useTextBox52Cb, useButton9Cb, useButton10Cb, useTextBox56Cb, useTextBox57Cb, useButton11Cb, useButton12Cb, useImage31Cb, useImage32Cb, useImage33Cb, useTextBox62Cb, useTextBox63Cb, useImage34Cb, useTextBox64Cb, useTextBox65Cb, useImage35Cb, useImage36Cb, useImage37Cb, useImage38Cb, useImage39Cb, useButton13Cb, useButton14Cb, useTextBox67Cb, useTextBox68Cb, useImage41Cb, useTextBox69Cb, useTextBox70Cb, useTextBox71Cb, useImage42Cb, useTextBox73Cb, useTextBox72Cb, useImage43Cb, useTextBox75Cb, useTextBox76Cb, useTextBox78Cb, useTextBox80Cb, useImage44Cb, useImage45Cb, useTextBox83Cb, useTextBox84Cb, useTextBox85Cb, useTextBox86Cb, useImage48Cb, useTextBox90Cb, useImage47Cb, useTextBox88Cb, useImage46Cb, useTextBox87Cb, useButton16Cb, useTextBox91Cb, useInput2Cb, useTextBox92Cb, useInput3Cb, useTextBox93Cb, useInput4Cb, useTextBox94Cb, useInput5Cb, useTextBox95Cb, useInput6Cb, useTextBox96Cb, useInput7Cb, useTextBox97Cb, useInput8Cb, useTextBox98Cb, useTextBox99Cb, useImage49Cb, useImage50Cb, useImage51Cb, useImage52Cb, useImage53Cb, useImage54Cb, useImage55Cb, useTextBox100Cb, useImage56Cb, useImage57Cb, useImage58Cb, useImage59Cb, useImage60Cb, useTextBox101Cb, useTextBox102Cb, useTextBox103Cb, useTextBox104Cb, useTextBox105Cb, useTextBox106Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useTextBox110Cb, useTextBox111Cb, useTextBox112Cb, useTextBox113Cb, useTextBox114Cb, useTextBox115Cb, useTextBox116Cb, useTextBox117Cb, useImage61Cb, useImage62Cb, useImage63Cb, useImage64Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const navbarProps = useStore((state)=>state["Home"]["navbar"]);
const navbarIoProps = useIoStore((state)=>state["Home"]["navbar"]);
const navbarCb = usenavbarCb()
const NavbarButtonsProps = useStore((state)=>state["Home"]["NavbarButtons"]);
const NavbarButtonsIoProps = useIoStore((state)=>state["Home"]["NavbarButtons"]);
const NavbarButtonsCb = useNavbarButtonsCb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const NavbarLinksProps = useStore((state)=>state["Home"]["NavbarLinks"]);
const NavbarLinksIoProps = useIoStore((state)=>state["Home"]["NavbarLinks"]);
const NavbarLinksCb = useNavbarLinksCb()
const BestBannerProps = useStore((state)=>state["Home"]["BestBanner"]);
const BestBannerIoProps = useIoStore((state)=>state["Home"]["BestBanner"]);
const BestBannerCb = useBestBannerCb()
const BestBannerLeftProps = useStore((state)=>state["Home"]["BestBannerLeft"]);
const BestBannerLeftIoProps = useIoStore((state)=>state["Home"]["BestBannerLeft"]);
const BestBannerLeftCb = useBestBannerLeftCb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const OrangeBGProps = useStore((state)=>state["Home"]["OrangeBG"]);
const OrangeBGIoProps = useIoStore((state)=>state["Home"]["OrangeBG"]);
const OrangeBGCb = useOrangeBGCb()
const BestBurgerImageProps = useStore((state)=>state["Home"]["BestBurgerImage"]);
const BestBurgerImageIoProps = useIoStore((state)=>state["Home"]["BestBurgerImage"]);
const BestBurgerImageCb = useBestBurgerImageCb()
const FavouriteAppsProps = useStore((state)=>state["Home"]["FavouriteApps"]);
const FavouriteAppsIoProps = useIoStore((state)=>state["Home"]["FavouriteApps"]);
const FavouriteAppsCb = useFavouriteAppsCb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div3Props = useStore((state)=>state["Home"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["Home"]["Div3"]);
const Div3Cb = useDiv3Cb()
const MenuContainerProps = useStore((state)=>state["Home"]["MenuContainer"]);
const MenuContainerIoProps = useIoStore((state)=>state["Home"]["MenuContainer"]);
const MenuContainerCb = useMenuContainerCb()
const BreakfastProps = useStore((state)=>state["Home"]["Breakfast"]);
const BreakfastIoProps = useIoStore((state)=>state["Home"]["Breakfast"]);
const BreakfastCb = useBreakfastCb()
const MainDishesProps = useStore((state)=>state["Home"]["MainDishes"]);
const MainDishesIoProps = useIoStore((state)=>state["Home"]["MainDishes"]);
const MainDishesCb = useMainDishesCb()
const DrinksProps = useStore((state)=>state["Home"]["Drinks"]);
const DrinksIoProps = useIoStore((state)=>state["Home"]["Drinks"]);
const DrinksCb = useDrinksCb()
const DessertsProps = useStore((state)=>state["Home"]["Desserts"]);
const DessertsIoProps = useIoStore((state)=>state["Home"]["Desserts"]);
const DessertsCb = useDessertsCb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const AboutUsContainerProps = useStore((state)=>state["Home"]["AboutUsContainer"]);
const AboutUsContainerIoProps = useIoStore((state)=>state["Home"]["AboutUsContainer"]);
const AboutUsContainerCb = useAboutUsContainerCb()
const AboutUsRightProps = useStore((state)=>state["Home"]["AboutUsRight"]);
const AboutUsRightIoProps = useIoStore((state)=>state["Home"]["AboutUsRight"]);
const AboutUsRightCb = useAboutUsRightCb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const ContactDetailsProps = useStore((state)=>state["Home"]["ContactDetails"]);
const ContactDetailsIoProps = useIoStore((state)=>state["Home"]["ContactDetails"]);
const ContactDetailsCb = useContactDetailsCb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const MenuHeadingProps = useStore((state)=>state["Home"]["MenuHeading"]);
const MenuHeadingIoProps = useIoStore((state)=>state["Home"]["MenuHeading"]);
const MenuHeadingCb = useMenuHeadingCb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const OrderOnlineButtonProps = useStore((state)=>state["Home"]["OrderOnlineButton"]);
const OrderOnlineButtonIoProps = useIoStore((state)=>state["Home"]["OrderOnlineButton"]);
const OrderOnlineButtonCb = useOrderOnlineButtonCb()
const ReservateButtonProps = useStore((state)=>state["Home"]["ReservateButton"]);
const ReservateButtonIoProps = useIoStore((state)=>state["Home"]["ReservateButton"]);
const ReservateButtonCb = useReservateButtonCb()
const navbar_logoProps = useStore((state)=>state["Home"]["navbar_logo"]);
const navbar_logoIoProps = useIoStore((state)=>state["Home"]["navbar_logo"]);
const navbar_logoCb = usenavbar_logoCb()
const HomeLinkProps = useStore((state)=>state["Home"]["HomeLink"]);
const HomeLinkIoProps = useIoStore((state)=>state["Home"]["HomeLink"]);
const HomeLinkCb = useHomeLinkCb()
const AboutLinkProps = useStore((state)=>state["Home"]["AboutLink"]);
const AboutLinkIoProps = useIoStore((state)=>state["Home"]["AboutLink"]);
const AboutLinkCb = useAboutLinkCb()
const MenuLinkProps = useStore((state)=>state["Home"]["MenuLink"]);
const MenuLinkIoProps = useIoStore((state)=>state["Home"]["MenuLink"]);
const MenuLinkCb = useMenuLinkCb()
const PagesLinkProps = useStore((state)=>state["Home"]["PagesLink"]);
const PagesLinkIoProps = useIoStore((state)=>state["Home"]["PagesLink"]);
const PagesLinkCb = usePagesLinkCb()
const CartLinkProps = useStore((state)=>state["Home"]["CartLink"]);
const CartLinkIoProps = useIoStore((state)=>state["Home"]["CartLink"]);
const CartLinkCb = useCartLinkCb()
const BestPlaceProps = useStore((state)=>state["Home"]["BestPlace"]);
const BestPlaceIoProps = useIoStore((state)=>state["Home"]["BestPlace"]);
const BestPlaceCb = useBestPlaceCb()
const BurgerLAProps = useStore((state)=>state["Home"]["BurgerLA"]);
const BurgerLAIoProps = useIoStore((state)=>state["Home"]["BurgerLA"]);
const BurgerLACb = useBurgerLACb()
const BestLoremProps = useStore((state)=>state["Home"]["BestLorem"]);
const BestLoremIoProps = useIoStore((state)=>state["Home"]["BestLorem"]);
const BestLoremCb = useBestLoremCb()
const BestReservateProps = useStore((state)=>state["Home"]["BestReservate"]);
const BestReservateIoProps = useIoStore((state)=>state["Home"]["BestReservate"]);
const BestReservateCb = useBestReservateCb()
const BestOrderProps = useStore((state)=>state["Home"]["BestOrder"]);
const BestOrderIoProps = useIoStore((state)=>state["Home"]["BestOrder"]);
const BestOrderCb = useBestOrderCb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const RappiProps = useStore((state)=>state["Home"]["Rappi"]);
const RappiIoProps = useIoStore((state)=>state["Home"]["Rappi"]);
const RappiCb = useRappiCb()
const GrubhubProps = useStore((state)=>state["Home"]["Grubhub"]);
const GrubhubIoProps = useIoStore((state)=>state["Home"]["Grubhub"]);
const GrubhubCb = useGrubhubCb()
const OrderTextProps = useStore((state)=>state["Home"]["OrderText"]);
const OrderTextIoProps = useIoStore((state)=>state["Home"]["OrderText"]);
const OrderTextCb = useOrderTextCb()
const PostmatesProps = useStore((state)=>state["Home"]["Postmates"]);
const PostmatesIoProps = useIoStore((state)=>state["Home"]["Postmates"]);
const PostmatesCb = usePostmatesCb()
const DoorDashProps = useStore((state)=>state["Home"]["DoorDash"]);
const DoorDashIoProps = useIoStore((state)=>state["Home"]["DoorDash"]);
const DoorDashCb = useDoorDashCb()
const BrowseMenuProps = useStore((state)=>state["Home"]["BrowseMenu"]);
const BrowseMenuIoProps = useIoStore((state)=>state["Home"]["BrowseMenu"]);
const BrowseMenuCb = useBrowseMenuCb()
const BreakfastImageProps = useStore((state)=>state["Home"]["BreakfastImage"]);
const BreakfastImageIoProps = useIoStore((state)=>state["Home"]["BreakfastImage"]);
const BreakfastImageCb = useBreakfastImageCb()
const BreakfastNameProps = useStore((state)=>state["Home"]["BreakfastName"]);
const BreakfastNameIoProps = useIoStore((state)=>state["Home"]["BreakfastName"]);
const BreakfastNameCb = useBreakfastNameCb()
const MenuDesc1Props = useStore((state)=>state["Home"]["MenuDesc1"]);
const MenuDesc1IoProps = useIoStore((state)=>state["Home"]["MenuDesc1"]);
const MenuDesc1Cb = useMenuDesc1Cb()
const ExploreMenu1Props = useStore((state)=>state["Home"]["ExploreMenu1"]);
const ExploreMenu1IoProps = useIoStore((state)=>state["Home"]["ExploreMenu1"]);
const ExploreMenu1Cb = useExploreMenu1Cb()
const DishesImageProps = useStore((state)=>state["Home"]["DishesImage"]);
const DishesImageIoProps = useIoStore((state)=>state["Home"]["DishesImage"]);
const DishesImageCb = useDishesImageCb()
const DishesNameProps = useStore((state)=>state["Home"]["DishesName"]);
const DishesNameIoProps = useIoStore((state)=>state["Home"]["DishesName"]);
const DishesNameCb = useDishesNameCb()
const MenuDesc2Props = useStore((state)=>state["Home"]["MenuDesc2"]);
const MenuDesc2IoProps = useIoStore((state)=>state["Home"]["MenuDesc2"]);
const MenuDesc2Cb = useMenuDesc2Cb()
const ExploreMenu2Props = useStore((state)=>state["Home"]["ExploreMenu2"]);
const ExploreMenu2IoProps = useIoStore((state)=>state["Home"]["ExploreMenu2"]);
const ExploreMenu2Cb = useExploreMenu2Cb()
const DrinksImageProps = useStore((state)=>state["Home"]["DrinksImage"]);
const DrinksImageIoProps = useIoStore((state)=>state["Home"]["DrinksImage"]);
const DrinksImageCb = useDrinksImageCb()
const DrinksNameProps = useStore((state)=>state["Home"]["DrinksName"]);
const DrinksNameIoProps = useIoStore((state)=>state["Home"]["DrinksName"]);
const DrinksNameCb = useDrinksNameCb()
const MenuDesc3Props = useStore((state)=>state["Home"]["MenuDesc3"]);
const MenuDesc3IoProps = useIoStore((state)=>state["Home"]["MenuDesc3"]);
const MenuDesc3Cb = useMenuDesc3Cb()
const ExploreMenu3Props = useStore((state)=>state["Home"]["ExploreMenu3"]);
const ExploreMenu3IoProps = useIoStore((state)=>state["Home"]["ExploreMenu3"]);
const ExploreMenu3Cb = useExploreMenu3Cb()
const DessertsImageProps = useStore((state)=>state["Home"]["DessertsImage"]);
const DessertsImageIoProps = useIoStore((state)=>state["Home"]["DessertsImage"]);
const DessertsImageCb = useDessertsImageCb()
const DessertsNameProps = useStore((state)=>state["Home"]["DessertsName"]);
const DessertsNameIoProps = useIoStore((state)=>state["Home"]["DessertsName"]);
const DessertsNameCb = useDessertsNameCb()
const MenuDesc4Props = useStore((state)=>state["Home"]["MenuDesc4"]);
const MenuDesc4IoProps = useIoStore((state)=>state["Home"]["MenuDesc4"]);
const MenuDesc4Cb = useMenuDesc4Cb()
const ExploreMenu4Props = useStore((state)=>state["Home"]["ExploreMenu4"]);
const ExploreMenu4IoProps = useIoStore((state)=>state["Home"]["ExploreMenu4"]);
const ExploreMenu4Cb = useExploreMenu4Cb()
const OrderOnlineProps = useStore((state)=>state["Home"]["OrderOnline"]);
const OrderOnlineIoProps = useIoStore((state)=>state["Home"]["OrderOnline"]);
const OrderOnlineCb = useOrderOnlineCb()
const BookATableProps = useStore((state)=>state["Home"]["BookATable"]);
const BookATableIoProps = useIoStore((state)=>state["Home"]["BookATable"]);
const BookATableCb = useBookATableCb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const AboutUsHeadProps = useStore((state)=>state["Home"]["AboutUsHead"]);
const AboutUsHeadIoProps = useIoStore((state)=>state["Home"]["AboutUsHead"]);
const AboutUsHeadCb = useAboutUsHeadCb()
const AboutUs1Props = useStore((state)=>state["Home"]["AboutUs1"]);
const AboutUs1IoProps = useIoStore((state)=>state["Home"]["AboutUs1"]);
const AboutUs1Cb = useAboutUs1Cb()
const AboutUs2Props = useStore((state)=>state["Home"]["AboutUs2"]);
const AboutUs2IoProps = useIoStore((state)=>state["Home"]["AboutUs2"]);
const AboutUs2Cb = useAboutUs2Cb()
const AboutUsProps = useStore((state)=>state["Home"]["AboutUs"]);
const AboutUsIoProps = useIoStore((state)=>state["Home"]["AboutUs"]);
const AboutUsCb = useAboutUsCb()
const JoinOurTeamProps = useStore((state)=>state["Home"]["JoinOurTeam"]);
const JoinOurTeamIoProps = useIoStore((state)=>state["Home"]["JoinOurTeam"]);
const JoinOurTeamCb = useJoinOurTeamCb()
const VisitUsProps = useStore((state)=>state["Home"]["VisitUs"]);
const VisitUsIoProps = useIoStore((state)=>state["Home"]["VisitUs"]);
const VisitUsCb = useVisitUsCb()
const LocationImageProps = useStore((state)=>state["Home"]["LocationImage"]);
const LocationImageIoProps = useIoStore((state)=>state["Home"]["LocationImage"]);
const LocationImageCb = useLocationImageCb()
const AddressProps = useStore((state)=>state["Home"]["Address"]);
const AddressIoProps = useIoStore((state)=>state["Home"]["Address"]);
const AddressCb = useAddressCb()
const PhoneImageProps = useStore((state)=>state["Home"]["PhoneImage"]);
const PhoneImageIoProps = useIoStore((state)=>state["Home"]["PhoneImage"]);
const PhoneImageCb = usePhoneImageCb()
const PhoneNoProps = useStore((state)=>state["Home"]["PhoneNo"]);
const PhoneNoIoProps = useIoStore((state)=>state["Home"]["PhoneNo"]);
const PhoneNoCb = usePhoneNoCb()
const EmailImageProps = useStore((state)=>state["Home"]["EmailImage"]);
const EmailImageIoProps = useIoStore((state)=>state["Home"]["EmailImage"]);
const EmailImageCb = useEmailImageCb()
const EmailProps = useStore((state)=>state["Home"]["Email"]);
const EmailIoProps = useIoStore((state)=>state["Home"]["Email"]);
const EmailCb = useEmailCb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Price1Props = useStore((state)=>state["Home"]["Price1"]);
const Price1IoProps = useIoStore((state)=>state["Home"]["Price1"]);
const Price1Cb = usePrice1Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const Price2Props = useStore((state)=>state["Home"]["Price2"]);
const Price2IoProps = useIoStore((state)=>state["Home"]["Price2"]);
const Price2Cb = usePrice2Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Price3Props = useStore((state)=>state["Home"]["Price3"]);
const Price3IoProps = useIoStore((state)=>state["Home"]["Price3"]);
const Price3Cb = usePrice3Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Price4Props = useStore((state)=>state["Home"]["Price4"]);
const Price4IoProps = useIoStore((state)=>state["Home"]["Price4"]);
const Price4Cb = usePrice4Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Price5Props = useStore((state)=>state["Home"]["Price5"]);
const Price5IoProps = useIoStore((state)=>state["Home"]["Price5"]);
const Price5Cb = usePrice5Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Price6Props = useStore((state)=>state["Home"]["Price6"]);
const Price6IoProps = useIoStore((state)=>state["Home"]["Price6"]);
const Price6Cb = usePrice6Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Price7Props = useStore((state)=>state["Home"]["Price7"]);
const Price7IoProps = useIoStore((state)=>state["Home"]["Price7"]);
const Price7Cb = usePrice7Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Price8Props = useStore((state)=>state["Home"]["Price8"]);
const Price8IoProps = useIoStore((state)=>state["Home"]["Price8"]);
const Price8Cb = usePrice8Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const Button13Props = useStore((state)=>state["Home"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["Home"]["Button13"]);
const Button13Cb = useButton13Cb()
const Button14Props = useStore((state)=>state["Home"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["Home"]["Button14"]);
const Button14Cb = useButton14Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const Input2Props = useStore((state)=>state["Home"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["Home"]["Input2"]);
const Input2Cb = useInput2Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const Input3Props = useStore((state)=>state["Home"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["Home"]["Input3"]);
const Input3Cb = useInput3Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const Input4Props = useStore((state)=>state["Home"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["Home"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const Input5Props = useStore((state)=>state["Home"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["Home"]["Input5"]);
const Input5Cb = useInput5Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const Input6Props = useStore((state)=>state["Home"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["Home"]["Input6"]);
const Input6Cb = useInput6Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const Input7Props = useStore((state)=>state["Home"]["Input7"]);
const Input7IoProps = useIoStore((state)=>state["Home"]["Input7"]);
const Input7Cb = useInput7Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Input8Props = useStore((state)=>state["Home"]["Input8"]);
const Input8IoProps = useIoStore((state)=>state["Home"]["Input8"]);
const Input8Cb = useInput8Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()

  return (<>
  <Flex className="p-Home navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Flex className="p-Home NavbarLinks bpt" {...NavbarLinksProps} {...NavbarLinksCb} {...NavbarLinksIoProps}>
<Image className="p-Home navbar_logo bpt" {...navbar_logoProps} {...navbar_logoCb} {...navbar_logoIoProps}/>
<Link className="p-Home HomeLink bpt" {...HomeLinkProps} {...HomeLinkCb} {...HomeLinkIoProps}/>
<Link className="p-Home AboutLink bpt" {...AboutLinkProps} {...AboutLinkCb} {...AboutLinkIoProps}/>
<Link className="p-Home MenuLink bpt" {...MenuLinkProps} {...MenuLinkCb} {...MenuLinkIoProps}/>
<Link className="p-Home PagesLink bpt" {...PagesLinkProps} {...PagesLinkCb} {...PagesLinkIoProps}/>
<Link className="p-Home CartLink bpt" {...CartLinkProps} {...CartLinkCb} {...CartLinkIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home NavbarButtons bpt" {...NavbarButtonsProps} {...NavbarButtonsCb} {...NavbarButtonsIoProps}>
<Button className="p-Home OrderOnlineButton bpt" {...OrderOnlineButtonProps} {...OrderOnlineButtonCb} {...OrderOnlineButtonIoProps}/>
<Button className="p-Home ReservateButton bpt" {...ReservateButtonProps} {...ReservateButtonCb} {...ReservateButtonIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home BestBanner bpt" {...BestBannerProps} {...BestBannerCb} {...BestBannerIoProps}>
<Flex className="p-Home BestBannerLeft bpt" {...BestBannerLeftProps} {...BestBannerLeftCb} {...BestBannerLeftIoProps}>
<TextBox className="p-Home BestPlace bpt" {...BestPlaceProps} {...BestPlaceCb} {...BestPlaceIoProps}/>
<TextBox className="p-Home BurgerLA bpt" {...BurgerLAProps} {...BurgerLACb} {...BurgerLAIoProps}/>
<TextBox className="p-Home BestLorem bpt" {...BestLoremProps} {...BestLoremCb} {...BestLoremIoProps}/>
<Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Button className="p-Home BestReservate bpt" {...BestReservateProps} {...BestReservateCb} {...BestReservateIoProps}/>
<Button className="p-Home BestOrder bpt" {...BestOrderProps} {...BestOrderCb} {...BestOrderIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home OrangeBG bpt" {...OrangeBGProps} {...OrangeBGCb} {...OrangeBGIoProps}>
<Div className="p-Home BestBurgerImage bpt" {...BestBurgerImageProps} {...BestBurgerImageCb} {...BestBurgerImageIoProps}>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home FavouriteApps bpt" {...FavouriteAppsProps} {...FavouriteAppsCb} {...FavouriteAppsIoProps}>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Image className="p-Home DoorDash bpt" {...DoorDashProps} {...DoorDashCb} {...DoorDashIoProps}/>
</Flex>
<TextBox className="p-Home OrderText bpt" {...OrderTextProps} {...OrderTextCb} {...OrderTextIoProps}/>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Image className="p-Home Postmates bpt" {...PostmatesProps} {...PostmatesCb} {...PostmatesIoProps}/>
</Flex>
<Image className="p-Home Rappi bpt" {...RappiProps} {...RappiCb} {...RappiIoProps}/>
<Image className="p-Home Grubhub bpt" {...GrubhubProps} {...GrubhubCb} {...GrubhubIoProps}/>
</Flex>
<Div className="p-Home Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<TextBox className="p-Home BrowseMenu bpt" {...BrowseMenuProps} {...BrowseMenuCb} {...BrowseMenuIoProps}/>
</Div>
<Flex className="p-Home MenuContainer bpt" {...MenuContainerProps} {...MenuContainerCb} {...MenuContainerIoProps}>
<Flex className="p-Home Breakfast bpt" {...BreakfastProps} {...BreakfastCb} {...BreakfastIoProps}>
<Image className="p-Home BreakfastImage bpt" {...BreakfastImageProps} {...BreakfastImageCb} {...BreakfastImageIoProps}/>
<TextBox className="p-Home BreakfastName bpt" {...BreakfastNameProps} {...BreakfastNameCb} {...BreakfastNameIoProps}/>
<TextBox className="p-Home MenuDesc1 bpt" {...MenuDesc1Props} {...MenuDesc1Cb} {...MenuDesc1IoProps}/>
<Link className="p-Home ExploreMenu1 bpt" {...ExploreMenu1Props} {...ExploreMenu1Cb} {...ExploreMenu1IoProps}/>
</Flex>
<Flex className="p-Home MainDishes bpt" {...MainDishesProps} {...MainDishesCb} {...MainDishesIoProps}>
<Image className="p-Home DishesImage bpt" {...DishesImageProps} {...DishesImageCb} {...DishesImageIoProps}/>
<TextBox className="p-Home DishesName bpt" {...DishesNameProps} {...DishesNameCb} {...DishesNameIoProps}/>
<TextBox className="p-Home MenuDesc2 bpt" {...MenuDesc2Props} {...MenuDesc2Cb} {...MenuDesc2IoProps}/>
<Link className="p-Home ExploreMenu2 bpt" {...ExploreMenu2Props} {...ExploreMenu2Cb} {...ExploreMenu2IoProps}/>
</Flex>
<Flex className="p-Home Drinks bpt" {...DrinksProps} {...DrinksCb} {...DrinksIoProps}>
<Image className="p-Home DrinksImage bpt" {...DrinksImageProps} {...DrinksImageCb} {...DrinksImageIoProps}/>
<TextBox className="p-Home DrinksName bpt" {...DrinksNameProps} {...DrinksNameCb} {...DrinksNameIoProps}/>
<TextBox className="p-Home MenuDesc3 bpt" {...MenuDesc3Props} {...MenuDesc3Cb} {...MenuDesc3IoProps}/>
<Link className="p-Home ExploreMenu3 bpt" {...ExploreMenu3Props} {...ExploreMenu3Cb} {...ExploreMenu3IoProps}/>
</Flex>
<Flex className="p-Home Desserts bpt" {...DessertsProps} {...DessertsCb} {...DessertsIoProps}>
<Image className="p-Home DessertsImage bpt" {...DessertsImageProps} {...DessertsImageCb} {...DessertsImageIoProps}/>
<TextBox className="p-Home DessertsName bpt" {...DessertsNameProps} {...DessertsNameCb} {...DessertsNameIoProps}/>
<TextBox className="p-Home MenuDesc4 bpt" {...MenuDesc4Props} {...MenuDesc4Cb} {...MenuDesc4IoProps}/>
<Link className="p-Home ExploreMenu4 bpt" {...ExploreMenu4Props} {...ExploreMenu4Cb} {...ExploreMenu4IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Button className="p-Home OrderOnline bpt" {...OrderOnlineProps} {...OrderOnlineCb} {...OrderOnlineIoProps}/>
<Button className="p-Home BookATable bpt" {...BookATableProps} {...BookATableCb} {...BookATableIoProps}/>
</Flex>
<Flex className="p-Home AboutUsContainer bpt" {...AboutUsContainerProps} {...AboutUsContainerCb} {...AboutUsContainerIoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<Flex className="p-Home ContactDetails bpt" {...ContactDetailsProps} {...ContactDetailsCb} {...ContactDetailsIoProps}>
<TextBox className="p-Home VisitUs bpt" {...VisitUsProps} {...VisitUsCb} {...VisitUsIoProps}/>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Image className="p-Home LocationImage bpt" {...LocationImageProps} {...LocationImageCb} {...LocationImageIoProps}/>
<TextBox className="p-Home Address bpt" {...AddressProps} {...AddressCb} {...AddressIoProps}/>
</Flex>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Image className="p-Home PhoneImage bpt" {...PhoneImageProps} {...PhoneImageCb} {...PhoneImageIoProps}/>
<TextBox className="p-Home PhoneNo bpt" {...PhoneNoProps} {...PhoneNoCb} {...PhoneNoIoProps}/>
</Flex>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Image className="p-Home EmailImage bpt" {...EmailImageProps} {...EmailImageCb} {...EmailImageIoProps}/>
<TextBox className="p-Home Email bpt" {...EmailProps} {...EmailCb} {...EmailIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home AboutUsRight bpt" {...AboutUsRightProps} {...AboutUsRightCb} {...AboutUsRightIoProps}>
<TextBox className="p-Home AboutUsHead bpt" {...AboutUsHeadProps} {...AboutUsHeadCb} {...AboutUsHeadIoProps}/>
<TextBox className="p-Home AboutUs1 bpt" {...AboutUs1Props} {...AboutUs1Cb} {...AboutUs1IoProps}/>
<TextBox className="p-Home AboutUs2 bpt" {...AboutUs2Props} {...AboutUs2Cb} {...AboutUs2IoProps}/>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Button className="p-Home AboutUs bpt" {...AboutUsProps} {...AboutUsCb} {...AboutUsIoProps}/>
<Button className="p-Home JoinOurTeam bpt" {...JoinOurTeamProps} {...JoinOurTeamCb} {...JoinOurTeamIoProps}/>
</Flex>
</Flex>
</Flex>
<TextBox className="p-Home MenuHeading bpt" {...MenuHeadingProps} {...MenuHeadingCb} {...MenuHeadingIoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox className="p-Home Price1 bpt" {...Price1Props} {...Price1Cb} {...Price1IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox className="p-Home Price2 bpt" {...Price2Props} {...Price2Cb} {...Price2IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Flex>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox className="p-Home Price3 bpt" {...Price3Props} {...Price3Cb} {...Price3IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Flex>
<Flex className="p-Home Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox className="p-Home Price4 bpt" {...Price4Props} {...Price4Cb} {...Price4IoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox className="p-Home Price5 bpt" {...Price5Props} {...Price5Cb} {...Price5IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Flex>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox className="p-Home Price6 bpt" {...Price6Props} {...Price6Cb} {...Price6IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Flex>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox className="p-Home Price7 bpt" {...Price7Props} {...Price7Cb} {...Price7IoProps}/>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<TextBox className="p-Home Price8 bpt" {...Price8Props} {...Price8Cb} {...Price8IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<Button className="p-Home Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Flex>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<Flex className="p-Home Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
</Flex>
</Flex>
</Flex>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
</Flex>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Button className="p-Home Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
<Button className="p-Home Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
</Flex>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Flex>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Flex>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Flex>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Flex>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex className="p-Home Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Flex>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
</Flex>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<Input className="p-Home Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Flex>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<Input className="p-Home Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<Input className="p-Home Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
<Input className="p-Home Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<Input className="p-Home Input6 bpt" {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
</Flex>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
<Input className="p-Home Input7 bpt" {...Input7Props} {...Input7Cb} {...Input7IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<Input className="p-Home Input8 bpt" {...Input8Props} {...Input8Cb} {...Input8IoProps}/>
</Flex>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
</Flex>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
</Flex>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Flex>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
