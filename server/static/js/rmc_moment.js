define(["moment", "moment-timezone", "ext/moment-timezone-data"], function (_moment, __, __) {
  // Always use America/Toronto as the timezone.
  function rmcMoment(a, b, c, d) {
    return _moment(a, b, c, d)
        .tz("America/Toronto");
  }
  rmcMoment.tz = _moment.tz;

  return rmcMoment;
});
