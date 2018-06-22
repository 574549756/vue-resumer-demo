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
#editor {
  min-height: 100px;
  display: flex;
  overflow: hidden;
  .sideNav {
    background: #000;
    width: 80px;
    > ol {
      :nth-child(1) {
        .icon {
          width: 3em;
          height: 3em;
          margin: 12px 8px 10px 8px;
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
