const mobileStripes = `
  linear-gradient( to right,
      var(--dark) 16px,
      var(--light) 16px,
      var(--light) 17px,
      var(--dark) 17px,
      var(--dark) calc(16px + var(--columnWidth)),
      var(--light) calc(16px + var(--columnWidth)),
      var(--light) calc(17px + var(--columnWidth)),
      var(--dark) calc(17px + var(--columnWidth)),
      var(--dark) calc(33px + var(--columnWidth)),
      var(--light) calc(33px + var(--columnWidth)),
      var(--light) calc(34px + var(--columnWidth)),
      var(--dark) calc(34px + var(--columnWidth)),
      var(--dark) calc(34px + calc(var(--columnWidth) * 2)),
      var(--light) calc(34px + calc(var(--columnWidth) * 2)),
      var(--light) calc(35px + calc(var(--columnWidth) * 2)),
      var(--dark) calc(35px + calc(var(--columnWidth) * 2)),
      var(--dark) calc(51px + calc(var(--columnWidth) * 2)),
      var(--light) calc(51px + calc(var(--columnWidth) * 2)),
      var(--light) calc(52px + calc(var(--columnWidth) * 2)),
      var(--dark) calc(52px + calc(var(--columnWidth) * 2)),
      var(--dark) calc(52px + calc(var(--columnWidth) * 3)),
      var(--light) calc(52px + calc(var(--columnWidth) * 3)),
      var(--light) calc(53px + calc(var(--columnWidth) * 3)),
      var(--dark) calc(53px + calc(var(--columnWidth) * 3)),
      var(--dark) calc(69px + calc(var(--columnWidth) * 3)),
      var(--light) calc(69px + calc(var(--columnWidth) * 3)),
      var(--light) calc(70px + calc(var(--columnWidth) * 3)),
      var(--dark) calc(70px + calc(var(--columnWidth) * 3)),
      var(--dark) calc(70px + calc(var(--columnWidth) * 4)),
      var(--light) calc(70px + calc(var(--columnWidth) * 4)),
      var(--light) calc(71px + calc(var(--columnWidth) * 4)),
      var(--dark) calc(71px + calc(var(--columnWidth) * 4))
    )
  }
`

export default mobileStripes
