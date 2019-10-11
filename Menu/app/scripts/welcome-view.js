export default function menuView (store) {
  let $welcomeHeader =
    $(`<section class="header-wrapper">
          <h1>Leche Favor</h1>
        </section>`);
  let $menuWrapper =
    $(`<section class="menu-wait">
          <h3 class="waiting-text">Your Options Await</h3>
        </section>`);

  $welcomeHeader.append($menuWrapper);

  return $welcomeHeader;

}
