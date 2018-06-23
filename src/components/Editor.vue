<template>
    <div id="editor">
        <nav class="sideNav">
            <ol>
                <li class="active">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-credentials_icon"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-graduate"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-phone"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-project"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-achievementregular"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-work0"></use>
                    </svg>
                </li>                            
            </ol>
        </nav>
        <ol class="panes"></ol>
    </div>
</template>


<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}
#editor {
  min-height: px(100);
  display: flex;
  overflow: hidden;
  .sideNav {
    background: #000;
    width: px(100);
    > ol {
      .icon {
        width: px(36);
        height: px(36);
        vertical-align: -0.15em;
        overflow: hidden;
        margin: px(16) px(10);
      }
      :nth-child(1) {
        .icon {
          width: px(40);
          height: px(40);
          margin: px(12) px(8) px(10) px(8);
        }
      }
      li {
        text-align: center;
        &.active {
          background: white;
          > .icon {
            fill: black;
          }
        }
      }
    }
  }
}
</style>
